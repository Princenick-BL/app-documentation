import { BASE_API_ENDPOINT } from '../../../../Store/inspiro-services/ai-services/src/constants';

interface Pages {
    [key: string]: any[];
}


export const pages: Pages =   {
    overview: [
        {
            type : "h1",
            content : "Introduction"
        },
        {
            type : "info",
            content : "Do you want to try our model from our plagroung? ",
            link : {
                text : "Click here.",
                url : "/"
            }
        },
        {
            type : "p",
            content : "Welcome to [Platform Name], the cutting-edge Platform as a Service (PaaS) that empowers developers like you to shape the future of application development. As a seasoned software engineer with expertise in various programming languages, including JavaScript, Python, Java, and C, you're in for an unparalleled experience with our platform."
        },
        {
            type : "p",
            content : "At [Platform Name], we understand the pivotal role APIs play in crafting the apps of the future. That's why we're excited to present our platform, equipped with four robust APIs harnessing the power of state-of-the-art AI models. As you embark on your journey to become the best engineer and developer ever, our APIs are designed to fuel your creativity, enhance your applications, and elevate your projects to new heights."
        },
        {
            type : "p",
            content : "Our commitment to excellence is reflected in the diversity of APIs currently available on our platform. Each API is meticulously crafted to meet the evolving demands of the tech landscape, providing you with the tools you need to build intelligent, efficient, and innovative applications."
        },
        {
            type : "p",
            content : "At [Platform Name], we are committed to delivering a seamless and optimized experience for developers. While certain features, including ultra-fast API response times, are still in development, we assure you that they are a top priority on our roadmap. Our team is dedicated to refining and enhancing these functionalities to ensure they meet the high standards that both you and our platform demand."
        },
        {
            type : "p",
            content : "Join a community of forward-thinking developers who leverage [Platform Name] to streamline their development processes. Whether you're delving into machine learning, natural language processing, computer vision, or other AI-driven domains, our platform is your gateway to unleashing the full potential of your skills."
        },
        {
            type : "p",
            content : "With a user-centric approach, we prioritize simplicity, flexibility, and scalability. Our goal is to empower you to create groundbreaking applications effortlessly, allowing you to focus on what you do best – crafting exceptional code."
        },
        {
            type : "p",
            content : "Get ready to revolutionize your development experience with [Platform Name]. The future of app development is here, and it starts with you. Embrace the possibilities, push the boundaries, and let [Platform Name] be your partner in building the next generation of extraordinary applications."
        },
        {
            type : "actions",
            actionRight : {
                text : "Next : Introduction" ,
                url : "/documentation/introduction"
            }
        }
    ],
    introduction: [
        {
            type : "h1",
            content : "Introduction"
        },
        {
            type : "p",
            content : "Let's take a look at how to configure and use our different APIs simply and effectively. First, a few basic concepts:"
        },
        {
            type : "h2",
            content : "Key concept : "
        },
        {
            type : "h3",
            content : "- Models"
        },
        {
            type : "p",
            content : "Each of our services can be associated with one or more models, with variations in processing time, the number of tokens used, etc."
        },
        {
            type : "h3",
            content : "- Tokens"
        },
        {
            type : "p",
            content : "Tokens represent the credits available to each account for use by our various APIs. Each call to our APIs requires a certain number of tokens depending on the service used. The token grid is as follows for each service."
        },
        {
            type : "h3",
            content : "- API key"
        },
        {
            type : "p",
            content : "API keys are the identification keys we use to find out which account is using a service. They allow us to authorise the use of a resource or not and also to provide you with a detailed report on your use of our services."
        },
        {
            type : "actions",
            actionLeft : {
                text : "Prev : Overview" ,
                url : "/dashboard"
            },
            actionRight : {
                text : "Next : Quick start" ,
                url : "/documentation/quick-start"
            }
        }
    ],
    "quick-start": [
        {
            type : "h1",
            content : "Quick start"
        },
        {
            type : "p",
            content : "In this section you will use your first service from [platform name]. Here we will try to retrieve the list of services available on the platform"
        },
        
        {
            type : "h3",
            content : "Step 1 : Get your API key"
        },
        {
            type : "p",
            content : "Taking possession of your API key couldn't be easier. Just register on our platform using the signup button on the screen. Once you're done, log in. In the menu bar on the right you will find the API keys menu. On this page you will find all your API keys select an active one that we will use."
        },
        {
            type : "h3",
            content : "Step 2 : API Call"
        },
        {
            type : "p",
            content : "Before using a service, please check the number of credits required for its use. The one we are going to test here uses 0 credits."
        },
        {
            type : "table",
            table : {
                header : ["Endpoint","Description","Token"],
                rows: [
                    {
                        row : [`GET : ${BASE_API_ENDPOINT}/standard/v1/models/search`,"Cupidatat ullamco voluptate esse nulla incididunt reprehenderit quis sint ipsum magna ad.",0]
                    }
                ]
            }
        },
        {
            type : "table",
            table : {
                header : ["Headers","Description"],
                rows: [
                    {
                        row : [
                            "Accept",
                            "(Optionnal) Cupidatat ullamco voluptate esse nulla incididunt."
                        ]
                    },
                    {
                        row : [
                            "Accept-Language",
                            "(Optionnal) Cupidatat ullamco voluptate esse nulla incididunt."
                        ]
                    },
                    {
                        row : [
                            "API-Key",
                            "(Required) Cupidatat ullamco voluptate esse nulla incididunt."
                        ]
                    },
                ]
            }
        },
        {
            type : "table",
            table : {
                header : ["Query params","Description"],
                rows: [
                    {
                        row : [
                            "q",
                            "(Optionnal) Cupidatat ullamco voluptate esse nulla incididunt."
                        ]
                    },
                    {
                        row : [
                            "limit",
                            "(Optionnal) Cupidatat ullamco voluptate esse nulla incididunt."
                        ]
                    },
                    {
                        row : [
                            "offset",
                            "(Optionnal) Cupidatat ullamco voluptate esse nulla incididunt."
                        ]
                    },
                ]
            }
        },
        {
            type : "h4",
            content : "Request example"
        },
        {
            type : "codeBlock",
            content : `curl --request GET
            --url '${BASE_API_ENDPOINT}/standard/v1/models/search'
            --header 'accept: application/json'
            --header 'api-key: your-sk-key-string'`
        },
        {
            type : "h4",
            content : "Response format"
        },
        {
            type : "json",
            content : `[
                {
                    "name": "st2t-1012-standard",
                    "group": "Speech to text",
                    "groupId": 1,
                    "tokenUnit": "1 secondes",
                    "tokenBurn": 100,
                    "description": ""
                },
                {
                    "name": "st2t-1012-turbo",
                    "group": "Speech to text",
                    "groupId": 1,
                    "tokenUnit": "1 secondes",
                    "tokenBurn": 200,
                    "description": ""
                },
                ...
]`
        },
        {
            type : "h4",
            content : "Error response"
        },
        {
            type : "json",
            content : `{
        "message": "Error message"
}`
        },
        {
            type : "actions",
            actionLeft : {
                text : "Prev : Introduction" ,
                url : "/documentation/introduction"
            },
            actionRight : {
                text : "Next : Speech to text" ,
                url : "/documentation/speech-to-text"
            }
        }
    ]
}