import React, { ReactNode } from 'react'
import styles from './index.module.scss'
import Logo from '@/components/Logo'
import Header from '@/components/Header'

type Props = {
  children?:ReactNode
}

export default function BlankLayout({children}: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  )
}