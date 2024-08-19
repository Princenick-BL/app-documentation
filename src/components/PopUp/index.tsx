import React, { ReactNode, useState } from 'react'
import styles from './index.module.scss'

type Props = {
    children?: ReactNode,
    visible?:boolean
}

export default function PopUp({children,visible}: Props) {
  return (
    <>
        {visible && (
            <div className={styles.popup}>
                <div className={styles.children}>{children}</div>
            </div>
        )}
    </>
  )
}