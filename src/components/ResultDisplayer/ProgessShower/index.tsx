import React from 'react'
import styles from './index.module.scss'

type Props = {}

export default function ProgressShower({ }: Props) {
  return (
    <div className={styles.progress}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.6 5.613C7.91 5.466 6.98 4.874 6.484 3.7c-.179-.423-.304-.917-.384-1.5 0-.1-.1-.2-.2-.2s-.2.1-.2.2c-.08.583-.205 1.077-.384 1.5C4.821 4.874 3.891 5.466 2.2 5.613c-.1 0-.2.1-.2.2s.1.2.2.2c2.1.4 3.2 1.187 3.5 3.387 0 .1.1.2.2.2s.2-.1.2-.2c.3-2.2 1.4-2.987 3.5-3.387.1 0 .2-.1.2-.2s-.1-.2-.2-.2Z"
          fill="fillCurrent"
        ></path>
        <path
          d="M19.469 11.865c-4-.8-5.726-2.73-6.526-6.629a.493.493 0 0 0-.474-.371.493.493 0 0 0-.475.376c.007-.015-.009.006 0 0-.8 4-2.625 5.824-6.525 6.624a.5.5 0 0 0 0 1c4 .8 5.717 2.687 6.517 6.587a.493.493 0 0 0 .483.413.493.493 0 0 0 .477-.387c.006-.008-.005.01 0 0 .8-4 2.623-5.813 6.523-6.613a.5.5 0 0 0 0-1Z"
          fill="fillCurrent"
        ></path>
        <path
          d="M21.465 5.8c0-.084-.061-.14-.144-.156l-.056-.013c-1.168-.305-1.876-1.024-2.073-2.108a.153.153 0 0 0-.153-.153v.004c-.084 0-.14.062-.156.144l-.013.056c-.305 1.168-1.024 1.876-2.108 2.073a.153.153 0 0 0-.153.153h.004c0 .084.062.14.145.156l.055.013c1.168.305 1.876 1.024 2.073 2.108 0 .084.069.153.153.153v-.004c.084 0 .14-.062.156-.145l.014-.055c.304-1.168 1.023-1.876 2.107-2.073a.15.15 0 0 0 .15-.153Z"
          fill="fillCurrent"
        ></path>
        <path
          d="M7.919 18.715c-1-.3-1.582-.782-1.782-1.782a.218.218 0 1 0-.436 0c-.3 1-.782 1.582-1.782 1.782a.218.218 0 0 0 0 .436c1 .3 1.582.782 1.782 1.782a.218.218 0 0 0 .436 0c.3-1 .782-1.582 1.782-1.782a.218.218 0 0 0 0-.436Z"
          fill="fillCurrent"
        ></path>
        <style type="text/css">
          {` rect{fill:url(#placeholdergradient)}`}
        </style>
        <defs>
          <linearGradient id="placeholdergradient">
            <stop offset="0%" stop-color="#0b0c0f" />
            <stop offset="47%" stop-color="rgba(16,52,43,1)" />
            <stop offset="100%" stop-color="rgba(16,52,43,1)" />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient
            id="_342851117__a"
            x1="-7.733"
            y1="11.576"
            x2="11.416"
            y2="31.039"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#03A5AB"></stop>
            <stop offset="1" stopColor="#8B3DFF"></stop>
          </linearGradient>
          <linearGradient
            id="_342851117__b"
            x1="-7.733"
            y1="11.576"
            x2="11.416"
            y2="31.039"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#03A5AB"></stop>
            <stop offset="1" stopColor="#8B3DFF"></stop>
          </linearGradient>
          <linearGradient
            id="_342851117__c"
            x1="-7.733"
            y1="11.576"
            x2="11.416"
            y2="31.039"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="fillCurrent"></stop>
            <stop offset="1" stopColor="fillCurrent"></stop>
          </linearGradient>
          <linearGradient
            id="_342851117__d"
            x1="-7.733"
            y1="11.576"
            x2="11.416"
            y2="31.039"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#03A5AB"></stop>
            <stop offset="1" stopColor="fillCurrent"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div><progress /></div>
      <div>Processing ...</div>
    </div>
  )
}