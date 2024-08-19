export interface Section {
  title: string;
  slug: string;
  key: string;
  icon: JSX.Element;
}

export interface Documentation {
  title: string;
  sections: Section[];
}

export const textExtractorMenu = [
  {
    title: "Text extractor",
    sections: [
      {
        title: "Studio",
        slug: "/studio?model=text-extractor",
        key: "text-extractor",
        icon: (
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
        ),
      },
      {
        title: "History",
        slug: "/studio/history",
        key: "history",
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.24223 4.5H17.7578L19.5 8.85556V18L18.75 18.75H5.25L4.5 18V8.85556L6.24223 4.5ZM7.25777 6L6.35777 8.25H17.6422L16.7422 6H7.25777ZM18 9.75H6V17.25H18V9.75ZM9.59473 13.6553L10.6554 12.5946L11.25 13.1892V11.25H12.75V13.1894L13.3447 12.5946L14.4054 13.6553L12.0001 16.0606L9.59473 13.6553Z"
                fill="fillCurent"
              ></path>{" "}
            </g>
          </svg>
        ),
      },
    ],
  },
];

export const accountSettingsMenu = [
  {
    title: "Account",
    sections: [
      {
        title: "Profile",
        slug: "/account/profile",
        key: "account-profile",
        icon: (
          <svg
            height="20"
            width="20"
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
        ),
      },
      {
        title: "Subscription",
        slug: "/account/subscription",
        key: "account-subscription",
        icon: (
          <svg
            height="20"
            width="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g >
              {" "}
              <rect
                x="3"
                y="6"
                width="18"
                height="13"
                rx="2"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></rect>{" "}
              <path
                d="M3 10H20.5"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M7 15H9"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        ),
      },
      {
        title: "Usage",
        slug: "/account/usage",
        key: "account-usage",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.33 5a1 1 0 0 0-1 1v13h3.33V6a1 1 0 0 0-1-1h-1.33Zm4.33 14H18a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2.34v10Zm0-12V6a3 3 0 0 0-3-3h-1.33a3 3 0 0 0-3 3v5H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2.34Zm-7.33 6H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.33v-6Z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        title: "Developper",
        slug: "/account/developper",
        key: "account-developper",
        icon: (
          <svg
            height="15"
            width="20"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g strokeWidth="0"></g>
            <g
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g >
              <path
                d="M877.685565 727.913127l-0.584863-0.365539a32.898541 32.898541 0 0 1-8.041866-46.423497 411.816631 411.816631 0 1 0-141.829267 145.777092c14.621574-8.992268 33.62962-5.117551 43.645398 8.772944l0.146216 0.073108a30.412874 30.412874 0 0 1-7.968758 43.206751l-6.141061 4.020933a475.201154 475.201154 0 1 1 163.615412-164.419599 29.974227 29.974227 0 0 1-42.841211 9.357807z m-537.342843-398.584106c7.164571-7.091463 24.71046-9.650239 33.26408 0 10.600641 11.185504 7.164571 29.462472 0 37.138798l-110.612207 107.468569L370.901811 576.14119c7.164571 7.091463 8.114974 27.342343 0 35.384209-9.796455 9.723347-29.828011 8.188081-36.480827 1.535265L208.309909 487.388236a18.423183 18.423183 0 0 1 0-25.953294l132.032813-132.032813z m343.314556 0l132.032813 132.032813a18.423183 18.423183 0 0 1 0 25.953294L689.652124 613.133772c-6.652816 6.579708-25.587754 10.746857-36.553935 0-10.30821-10.235102-7.091463-31.290168 0-38.381632l108.345863-100.669537-111.855041-108.638294c-7.164571-7.676326-9.504023-26.611265 0-36.04218 9.284699-9.138484 26.903696-7.091463 34.068267 0z m-135.54199-26.318833c3.582286-9.504023 21.347498-15.498868 32.679217-11.258612 10.819965 4.020933 17.180349 19.008046 14.256035 28.512069l-119.896906 329.716493c-3.509178 9.504023-20.616419 13.305632-30.193551 9.723347-10.161994-3.509178-21.201282-17.545889-17.545888-26.976804l120.627985-329.716493z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        ),
      },
    ],
  },
];

export const imageProcessing = [
  {
    title: "Deep Image processing",
    sections: [
      {
        title: "Studio",
        slug: "/studio?model=deep-image-processing",
        key: "deep-image-processing",
        icon: (
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
        ),
      },
      {
        title: "History",
        slug: "/studio/history",
        key: "history",
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.24223 4.5H17.7578L19.5 8.85556V18L18.75 18.75H5.25L4.5 18V8.85556L6.24223 4.5ZM7.25777 6L6.35777 8.25H17.6422L16.7422 6H7.25777ZM18 9.75H6V17.25H18V9.75ZM9.59473 13.6553L10.6554 12.5946L11.25 13.1892V11.25H12.75V13.1894L13.3447 12.5946L14.4054 13.6553L12.0001 16.0606L9.59473 13.6553Z"
                fill="fillCurent"
              ></path>{" "}
            </g>
          </svg>
        ),
      },
    ],
  },
];
