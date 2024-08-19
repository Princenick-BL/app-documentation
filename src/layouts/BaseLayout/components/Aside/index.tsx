import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { BREACKPOINT } from "../../../../../config";

type Props = {
  current?: string;
  viewportWidth: number;
};

export default function Aside({ current, viewportWidth }: Props) {
  const docs = [
    {
      title: "Get started",
      sections: [
        {
          title: "Overview",
          slug: "/dev/overview",
        },
        {
          title: "Introduction",
          slug: "/dev/introduction",
        },
        {
          title: "Quick start",
          slug: "/dev/quick-start",
        },
      ],
    },
    {
      title: "Services",
      sections: [
        {
          title: "Speech to text",
          slug: "/dev/speech-to-text",
        },
        {
          title: "Text summary",
          slug: "/dev/documentation/text-summary",
        },
        {
          title: "Article to video",
          slug: "/dev/article-to-video",
        },
        {
          title: "Image to video",
          slug: "/dev/image-to-video",
        },
      ],
    },
  ];

  const [open, closed] = useState(true);

  useEffect(() => {
    if (viewportWidth < 900) {
      closed(false);
    } else {
      closed(true);
    }
  }, [viewportWidth]);

  return (
    <div
      className={`${styles.layoutAside} ${
        !open ? styles.layoutAsideClosed : ""
      }`}
    >
      <div className={styles.aside}>
        <div className={styles.searchBox}>
          <div>
            <svg width="16" height="16" viewBox="0 0 20 20">
              <path
                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
              Search
            </span>
          </div>
          <div className={styles.ctrl}>
            <span>
              <svg width="15" height="15">
                <path
                  d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953"
                  strokeWidth="1.2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="square"
                ></path>
              </svg>
            </span>
            <span>K</span>
          </div>
        </div>
        <div className={styles.documentations}>
          {docs?.map((doc, i) => (
            <div key={i} className={styles.documentation}>
              <h3>{doc.title}</h3>
              {doc.sections.map((section, j) => (
                <Link
                  key={`${i}-${j}`}
                  href={section.slug}
                  className={`${styles.section} ${
                    current?.toLowerCase() ==
                    section.title?.toLowerCase()?.split(" ")?.join("-")
                      ? styles.sectionActive
                      : ""
                  }`}
                >
                  {section.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className={styles.openCloseBox}
        style={{
          display: viewportWidth < BREACKPOINT ? "flex" : "none",
        }}
      >
        <div
          className={styles.openCloseContainer}
          onClick={(e) => {
            closed(!open);
          }}
        >
          <div
            className={`${styles.openCloseBtn} ${
              !open ? styles.openCloseBtnOpen : styles.openCloseBtnClosed
            }`}
          >
            <div className={styles.btnBar}></div>
            <div className={styles.btnBar}></div>
          </div>
          <svg
            className={styles.btnBarClosed}
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            enableBackground="new 0 0 64 64"
            fill="#000000"
          >
            <g  strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g >
              {" "}
              <path
                fill="#231F20"
                d="M60,52V4c0-2.211-1.789-4-4-4H14v51v3h42v8H10c-2.209,0-4-1.791-4-4s1.791-4,4-4h2v-3V0H8 C5.789,0,4,1.789,4,4v54c0,3.313,2.687,6,6,6h49c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1v-8C59.104,54,60,53.104,60,52z M23,14h12 c0.553,0,1,0.447,1,1s-0.447,1-1,1H23c-0.553,0-1-0.447-1-1S22.447,14,23,14z M42,28H23c-0.553,0-1-0.447-1-1s0.447-1,1-1h19 c0.553,0,1,0.447,1,1S42.553,28,42,28z M49,22H23c-0.553,0-1-0.447-1-1s0.447-1,1-1h26c0.553,0,1,0.447,1,1S49.553,22,49,22z"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
