import PopUp from "@/components/PopUp";
import { APIKey, apiKeyDetails, createAPIKey, updateAPIKey } from "@/services/api-key";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "@/components/APIKeys/index.module.scss";

type Props = {
  accessToken: string;
  id: string;
  onEnd: () => {};
};

export default function UpdateModal({ accessToken, id, onEnd }: Props) {

  const [visible, setVisible] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);
  const [apiKey,setApiKey] = useState<APIKey|null>(null)

  const nameRef = useRef<HTMLInputElement>(null);
  const allowedHostsRef = useRef<HTMLInputElement>(null);
  const allowedServicesRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    const fetchApiKey = async () =>{
      const details = await apiKeyDetails(id,accessToken)
      if(details?.data){
        setApiKey(details?.data)
      }
    }
    fetchApiKey()
  },[id])

  const handleUpdate = async () => {
    setLoading(true);
    const apiKeyResult = await updateAPIKey(
      id,
      {
        name: nameRef.current?.value as string,
        allowedHosts: allowedHostsRef.current?.value as any,
        allowedServices: allowedServicesRef.current?.value as any,
      },
      accessToken
    );
    onEnd && onEnd()
    setLoading(false);
    setVisible(false);
  };

  const hansleClose = () =>{
    onEnd && onEnd()
  }

  const copyToClipboard = useCallback(async () => {
    if (generatedKey) {
      try {
        await navigator.clipboard.writeText(generatedKey);
        console.log("Text successfully copied to clipboard");
      } catch (err) {
        console.error("Unable to copy to clipboard", err);
      }
    }
  }, [generatedKey]);
  return (
    <div className={styles.wrapper}>
      <div>
        <button
          onClick={(e) => {
            setVisible(true);
          }}
          className={styles.btn}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              {" "}
              <path
                d="M20.1498 7.93997L8.27978 19.81C7.21978 20.88 4.04977 21.3699 3.32977 20.6599C2.60977 19.9499 3.11978 16.78 4.17978 15.71L16.0498 3.84C16.5979 3.31801 17.3283 3.03097 18.0851 3.04019C18.842 3.04942 19.5652 3.35418 20.1004 3.88938C20.6356 4.42457 20.9403 5.14781 20.9496 5.90463C20.9588 6.66146 20.6718 7.39189 20.1498 7.93997V7.93997Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
      <PopUp visible={visible}>
        <form className={styles.formContent}>
          <h1>Update API Key settings</h1>
          <div className={"form-item"}>
            <label>Name</label>
            <p>Give a name to identify you api key</p>
            <input ref={nameRef} type="text" placeholder="ex: Text gen" defaultValue={apiKey?.name}/>
          </div>
          <div>
            <div
              className={styles.advanced}
              onClick={(e) => {
                setAdvanced(!advanced);
              }}
            >
              <span>Advanced options {advanced ? "⯆" : "⯅"}</span>
            </div>
            {advanced && (
              <div>
                <div className={"form-item"}>
                  <label>Allowed domain</label>
                  <p>
                    Choose the host that are allowed to use this api key (comma
                    sapareted value)
                  </p>
                  <input
                    type="text"
                    placeholder="ex: example.com,localhost:3000"
                    defaultValue={apiKey?.allowedHosts}
                  />
                </div>
                <div className={"form-item"}>
                  <label>Allowed service</label>
                  <p>
                    Choose the service that this api call can used. (comma
                    sapareted value)
                  </p>
                  <input
                    type="text"
                    placeholder="ex: speech to text,text summary"
                    defaultValue={apiKey?.allowedServices}
                  />
                </div>
              </div>
            )}
          </div>
          <div className={styles.btns}>
            <div
              onClick={(e) => {
                handleUpdate();
              }}
              style={{ marginLeft: "1rem" }}
              className="btn primary"
            >
              {loading && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeWidth="8"
                    strokeDasharray="42.76482137044271 42.76482137044271"
                    d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
                    strokeLinecap="round"
                    style={{
                      transform: "scale(0.8)",
                      transformOrigin: "50px 50px",
                    }}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      repeatCount="indefinite"
                      dur="1s"
                      keyTimes="0;1"
                      values="0;256.58892822265625"
                    ></animate>
                  </path>
                </svg>
              )}
              Update
            </div>
            <div
              onClick={(e) => {
                setVisible(false);
              }}
              className="btn "
            >
              Cancel
            </div>
          </div>
        </form>
      </PopUp>
   
    </div>
  );
}
