export const Status = ({status}:{status:number}) =>{
    switch (status){
        case 1 :
            return (<span className="status activated">Active</span>)
        case 2 :
            return (<span className="status stand-by">Stand by</span>)
        case 3 :
            return (<span className="status deactivated">DeActiveted</span>)
    }
}