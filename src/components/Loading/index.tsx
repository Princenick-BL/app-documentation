import React from "react";
import styles from './index.module.scss'

type Props = {
  className?:string
};

export default function Loading({className}: Props) {
  return (
    <div className={styles.wrapper}>
      <svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.03 122.03">
        <g id="Calque_1-2" data-name="Calque 1">
          <g>
            <path className="cls-1" d="m50.19,11.5v-2.25c.06-.53.26-.97.88-1.29h25.32V2.03c-4.92-1.28-10.06-2.03-15.38-2.03-6.69,0-13.12,1.12-19.14,3.11v29.49l8.32-20.86s0-.1,0-.24Z"/>
            <path className="cls-1" d="m88.37,18.35l1.59-1.59c.42-.33.87-.5,1.54-.29l17.9,17.9,4.2-4.2c-5.94-10.11-14.69-18.33-25.19-23.63l-20.84,20.84s20.71-8.94,20.8-9.04Z"/>
            <path className="cls-1" d="m118.92,41.87h-29.49l20.86,8.32h0s2.48,0,2.48,0c.53.06.97.26,1.29.88v25.32h5.93c1.28-4.92,2.03-10.06,2.03-15.38,0-6.69-1.12-13.12-3.11-19.14Z"/>
            <path className="cls-1" d="m103.51,88.21s.07.07.17.17l1.59,1.59c.33.42.5.87.29,1.54l-17.9,17.9,4.2,4.2c10.11-5.94,18.33-14.68,23.63-25.19l-20.84-20.84,8.87,20.64Z"/>
            <path className="cls-1" d="m71.83,110.29s0,.1,0,.24v2.25c-.06.53-.26.97-.88,1.29h-25.32v5.93c4.92,1.28,10.06,2.03,15.38,2.03,6.69,0,13.12-1.12,19.14-3.11v-29.49l-8.32,20.86h0Z"/>
            <path className="cls-1" d="m33.82,103.51h0s-.07.07-.17.17l-1.59,1.59c-.42.33-.87.5-1.54.29l-17.9-17.9-4.2,4.2c5.94,10.11,14.69,18.33,25.19,23.63l20.84-20.84-20.64,8.87Z"/>
            <path className="cls-1" d="m11.74,71.84s-.1,0-.24,0h-2.25c-.53-.06-.97-.26-1.29-.88v-25.32H2.03c-1.28,4.92-2.03,10.06-2.03,15.38,0,6.69,1.12,13.12,3.11,19.14h29.49l-20.86-8.32Z"/>
            <path className="cls-1" d="m18.52,33.82h0s-.07-.07-.17-.17l-1.59-1.59c-.33-.42-.5-.87-.29-1.54l17.9-17.9-4.2-4.2c-10.11,5.94-18.33,14.69-23.63,25.19l20.84,20.84-8.87-20.64Z"/>
          </g>
        </g>
      </svg>
    </div>
   
  );
}