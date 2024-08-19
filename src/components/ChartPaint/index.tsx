import React, { useEffect, useState } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";
import { APIData } from "@/services/usage";
import moment from "moment";



const APIChart: React.FC<{ apiData: APIData,type?:string }> = ({ apiData,type="cost" }) => {
  const [chart, setChart] = useState<Chart | null>(null);

  useEffect(() => {
    if (apiData) {
      const ctx = document.getElementById("apiChart") as HTMLCanvasElement;
      // Destroy the existing chart instance
      if (chart) {
        chart.destroy();
      }
      const data = {
        labels: apiData.dates?.map((date)=>{
          return moment(date).format("MMM Do")
        }),
        datasets: apiData.apis.map((api) => ({
          label: api.name,
          data: api.usage.map((queries) =>{return type =="cost" ?((queries * api.tokenBurn / 1000) * 0.001 ) : queries}),
          backgroundColor: api.color,
          borderColor: api.color,
          borderWidth: 1,
        })),
      };

      const options = {
        plugins: {
          datalabels: {
            anchor: "end",
            align: "end",
          },
        },
        scales: {
          x: {
            type: "category",
            stepSize: 5, // Show every 5th day
            ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
                stepSize: .2,
                
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      };

      if (!chart) {
        const newChart = new Chart(ctx, {
          type: "bar",
          data: data,
          options: options,
        });

        setChart(newChart);
        return () => {
          if (newChart) {
            newChart.destroy();
          }
        };
      }
    }
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [apiData]);

  return (
    <div>
      <h2>{type =="cost" ? "Daily costs":"Daily usage"}</h2>
      <div></div>
      <canvas style={{
        padding : "0 1rem"
      }} id="apiChart" ></canvas>
    </div>
  );
};

export default APIChart;
