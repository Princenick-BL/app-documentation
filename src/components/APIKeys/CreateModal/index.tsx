import PopUp from '@/components/PopUp';
import { createAPIKey } from '@/services/api-key';
import React, { useCallback, useRef, useState } from 'react'
import styles from '@/components/APIKeys/index.module.scss'

type Props = {
  accessToken:string
  onEnd: () => {};
}

export default function CreateModal({accessToken,onEnd}: Props) {

    const apiKeyRef = useRef<HTMLInputElement>(null);
    const [visible, setVisible] = useState(false);
    const [advanced, setAdvanced] = useState(false);
    const [loading, setLoading] = useState(false);
    const [generatedKey, setGeneratedKey] = useState<string|null>(null);
  
    const nameRef = useRef<HTMLInputElement>(null);

    const handleCreate = async () => {
        setLoading(true);
        console.log("handleCreate", accessToken);
        const apiKeyResult = await createAPIKey(
          {
            name: nameRef.current?.value as string,
          },
          accessToken
        );
        setGeneratedKey(apiKeyResult?.data);
        setLoading(false);
        setVisible(false);
      };
    
      const copyToClipboard = useCallback(async () => {
        if(generatedKey){
          try {
            await navigator.clipboard.writeText(generatedKey);
            console.log('Text successfully copied to clipboard');
          } catch (err) {
            console.error('Unable to copy to clipboard', err);
          }
        }
      },[generatedKey]);
  return (
    <div>
        <div>
            <button
              onClick={(e) => {
                setVisible(true);
              }}
              className={styles.btn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v12m-6-6h12"
                ></path>
              </svg>
              <span>Create new api key</span>
            </button>
          </div>
          <PopUp visible={visible}>
            <form className={styles.formContent}>
              <h1>Create new API Key</h1>
              <div className={"form-item"}>
                <label>Name</label>
                <p>Give a name to identify you api key</p>
                <input ref={nameRef} type="text" placeholder="ex: Text gen" />
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
                        Choose the host that are allowed to use this api key
                        (comma sapareted value)
                      </p>
                      <input
                        type="text"
                        placeholder="ex: example.com,localhost:3000"
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
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.btns}>
                <div
                  onClick={(e) => {
                    handleCreate();
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
                  Create
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
          <PopUp visible={!!generatedKey}>
            <div className={styles.generatedToken}>
              <svg onClick={(e)=>{
                setGeneratedKey(null)
                onEnd && onEnd()
              }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <h3>Generated token</h3>
              <p className={styles.alert}>
                This key will be displayed once and only once, so please save
                it. Keep it secret and avoid exposing it publicly in your
                projects or in client-side code to ensure the security of your
                account.{" "}
              </p>
              <div className={"form-item"}>
                <label style={{ fontWeight: "bold", fontSize: ".8rem" }}>
                  API Key
                </label>
                <div className={styles.inputFound}>
                  <input
                    ref={nameRef}
                    type="text"
                    readOnly
                    value={generatedKey as string}
                  />
                  <button>
                    <svg
                      fill="#000000"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={(e)=>{copyToClipboard()}}
                    >
                      <g  strokeWidth="0"></g>
                      <g
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g >
                        <path d="M13.49 3 10.74.37A1.22 1.22 0 0 0 9.86 0h-4a1.25 1.25 0 0 0-1.22 1.25v11a1.25 1.25 0 0 0 1.25 1.25h6.72a1.25 1.25 0 0 0 1.25-1.25V3.88a1.22 1.22 0 0 0-.37-.88zm-.88 9.25H5.89v-11h2.72v2.63a1.25 1.25 0 0 0 1.25 1.25h2.75zm0-8.37H9.86V1.25l2.75 2.63z"></path>
                        <path d="M10.11 14.75H3.39v-11H4V2.5h-.61a1.25 1.25 0 0 0-1.25 1.25v11A1.25 1.25 0 0 0 3.39 16h6.72a1.25 1.25 0 0 0 1.25-1.25v-.63h-1.25z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </PopUp>
    </div>
  )
}