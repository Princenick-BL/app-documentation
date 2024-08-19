import React, { useState } from "react";
import styles from "./index.module.scss";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { generateHexColor } from "@/utils/utils";
type Props = {};

export default function HeaderProfile({}: Props) {
  const [open,close] = useState(false)
  const {data,status} = useSession()
  // console.log("AppSiderProfile",{data,status})
  return (
    <div className={styles.profile}>
      {data?.user ? (
        <>
          <div className={styles.profileBoxMain} onClick={(e)=>{close(!open)}} style={{
                  backgroundColor : generateHexColor(data?.user?.name?.[0] || "G")
                }}>
            <div className={styles.profileName} >{data?.user?.name?.[0] || "G"}</div>        
          </div>
          {open&&(
            <div className={styles.otherOptions}>
              <Link href={"/account/profile"} className={styles.profileBox} >
                <div className={styles.profileIcon} style={{
                  backgroundColor : generateHexColor(data?.user?.name?.[0] || "G")
                }}>{data?.user?.name?.[0] || "G"}  </div>
                <div className={styles.profileDetails}>
                  <div className={styles.profileNameFull}>{data?.user?.name || "Guest"}</div>
                </div>
              </Link>
              {/* <div className={styles.profileLevel}>Trial</div> */}
              <Link href={"/account/subscription"} className={styles.otherOption}>
                <svg
                  height="15"
                  width="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Avatar">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z"
                    ></path>
                  </g>
                </svg>
                Manage Subscription
              </Link>
              <div className={styles.otherOption} onClick={(e)=>{signOut()}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  height="15"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                Sign Out
              </div>
            </div>
          )}
        </>
      ):(
        <div className={styles.connectionCta}>
          <Link href={"/auth/login?redirect=/"} className={`btn ${styles.btn}`}>Log in</Link>
          <Link href={"/auth/signup?redirect=/"} className={`btn primary ${styles.btn}`}>Sign up</Link>
        </div>
      )}
    </div>
  );
}
