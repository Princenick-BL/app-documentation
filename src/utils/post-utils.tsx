import HighLighter from "@/components/Highlighter"
import Link from "next/link"


type TableRow = {
    row : string []
}
export type PageSection = {
    type : string,
    content : string ,
    link : {
        text : string,
        url : string
    },
    actionLeft :{
        text : string,
        url : string
    },
    actionRight :{
        text : string,
        url : string
    }
    table : {
        header : string[],
        rows: TableRow[],
        token : 0
    }
}



export const getPageSection =(section:PageSection)=>{
    switch(section.type){
        case "h1":
            return <h1>{section.content}</h1>
        case "h2":
            return <h2>{section.content}</h2>
        case "h3":
            return <h3>{section.content}</h3>
        case "h4":
            return <h4>{section.content}</h4>
        case "h5":
            return <h5>{section.content}</h5>
        case "p":
            return <p>{section.content}</p>
        case "li":
            return <ul><li>{section.content}</li></ul>
        case "info":
            return( 
                <div className="page-section-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24"><path d="M13 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm-1-2.5A1.25 1.25 0 1 0 12 7a1.25 1.25 0 0 0 0 2.5Z"></path><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" clipRule="evenodd"></path></svg>
                    <span>{section?.content}</span>
                    <Link href={section?.link?.url}>{section?.link?.text}</Link>
                </div>
            )
        case "actions":
            return( 
                <div className="page-section-actions">
                    <div>
                        {section?.actionLeft && <Link href={section?.actionLeft?.url || "/"}>&#x2190; {section?.actionLeft?.text}</Link>}
                        
                    </div>
                    <div>
                        {section?.actionRight && <Link href={section?.actionRight?.url || "/"}>{section?.actionRight?.text} &#x2192;</Link>}
                        
                    </div>
                </div>
            )
        case "codeBlock":
            return (
                <HighLighter
                    language={"javascript"}
                    code={section.content}
                />
            )
        case "json":
            return (
                <HighLighter
                    language={"json"}
                    code={section.content}
                />
            )
        case "table":
            return (
                <table className="page-section-table">
                    {section?.table?.header && (
                        <thead>
                            <tr>
                                {section?.table?.header?.map((h,i)=>(
                                    <th style={{width: `${h == "Token" ? "5%" :(`${(section?.table?.header?.includes('Token') ? 95 : 100)/section?.table?.header?.length}%`)}`}} key={i}>{h}</th>
                                ))}
                                {section?.table?.token && <th>Token</th>}
                            </tr>
                        </thead>
                    )}
                    {section?.table?.rows && (
                        <tbody>
                            {section?.table?.rows?.map((row,j)=>(
                                <tr key={j}>
                                    {row?.row?.map((r,k)=>(
                                        <td key={`${j}-${k}`}>{r}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            )
    }
}



