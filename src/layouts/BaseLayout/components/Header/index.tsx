import React from 'react'
import styles from './index.module.scss'
type Props = {
    title?:string
}

export default function Header({title}: Props) {
  return (
    <div className={styles.header}>
        <h1>{title}</h1>
    </div>
  )
}