import React from 'react'
import styles from './index.module.scss'

type Props = {
    data: any
}

export default function ThreeDAnimResult({ data }: Props) {
    return (
        <div className={styles.result}>
            <div
                className={`${styles.main}  ${"skeleton"}`}
            >

            </div>
            <div className={styles.options}>
                <div
                    className={`${styles.option}  ${"skeleton"}`}
                >

                </div>
                <div
                    className={`${styles.option}  ${"skeleton"}`}
                >

                </div>
                <div
                    className={`${styles.option}  ${"skeleton"}`}
                >

                </div>
                <div
                    className={`${styles.option}  ${"skeleton"}`}
                >

                </div>
            </div>
        </div>
    )
}