import { getSession } from 'next-auth/react';
import React, { ReactNode, useEffect, useState } from 'react'
import styles from './index.module.scss'
import Header from './components/Header';
import Aside from './components/Aside';

type Props = {
    children?: ReactNode
    title?: string,
    aside?:string
}

export default function Layout({children,title="Dashboard",aside}: Props) {
  
  const [viewportWidth, setViewportWidth] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize()

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <main className={styles.layoutMain}>
      <section className={styles.layoutChildren}>
        <Header title={title}/>
        <section className={styles.section}>
          <Aside viewportWidth={viewportWidth} current={aside}/>
          <section className={styles.children}>
            <div className={styles.content}>{children}</div>
          </section>
        </section>
      </section>
      {/* <Infos viewportWidth={viewportWidth} title={title}/> */}
    </main>
  )
}
