import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

type Props = {
    className?: string
}

export default function Logo({className}: Props) {
  return (
    <h1 className={`${styles.logo} ${className ?className:" "}`}><Link href={"/"}>GATHEREDAI</Link></h1>
  )
}