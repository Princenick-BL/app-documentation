import PopUp from "@/components/PopUp";
import { createAPIKey, deleteApiKey } from "@/services/api-key";
import React, { useCallback, useRef, useState } from "react";
import styles from "@/components/APIKeys/index.module.scss";
import { useRouter } from "next/router";

type Props = {
  accessToken: string;
  id: string;
  name: string;
  onEnd: ()=>{}
};

export default function DeleteModal({ accessToken, id,name,onEnd }: Props) {
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = useCallback(async () => {
    setLoading(true);
    try {
      await deleteApiKey(id, accessToken);
    } catch (e:any) {
        console.log("Failed",e?.message)
    }
    onEnd && onEnd()
    setLoading(false);
    setVisible(false);
  }, [id, router]);

  return (
    <div className={styles.wrapper}>
      <div>
        <button
          onClick={(e) => {
            setVisible(true);
          }}
          className={styles.btn}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              {" "}
              <path
                d="M10 11V17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M14 11V17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M4 7H20"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
      <PopUp visible={visible}>
        <form className={styles.formContent}>
          <h3>Do you really want to delete this key?</h3>
          <div>The api key : {name}</div>
          <div className={styles.btns}>
            <div
              onClick={(e) => {
                handleDelete();
              }}
              style={{ marginLeft: "1rem" }}
              className="btn primary"
            >
              {loading && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeWidth="8"
                    strokeDasharray="42.76482137044271 42.76482137044271"
                    d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
                    strokeLinecap="round"
                    style={{
                      transform: "scale(0.8)",
                      transformOrigin: "50px 50px",
                    }}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      repeatCount="indefinite"
                      dur="1s"
                      keyTimes="0;1"
                      values="0;256.58892822265625"
                    ></animate>
                  </path>
                </svg>
              )}
              Yes
            </div>
            <div
              onClick={(e) => {
                setVisible(false);
              }}
              className="btn "
            >
              No
            </div>
          </div>
        </form>
      </PopUp>
    </div>
  );
}
