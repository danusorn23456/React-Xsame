import { useState } from "react"

export default () =>{

    const [FilterWith,setFilterWith] = useState('all')

    return{
        FilterWith,
        dataFilter : (todos)=>{
            if(FilterWith === 'all'){
                return todos;
            }else if(FilterWith === 'complete'){
                return todos.filter((item,index)=>(item.isComplete === true));
            }else if(FilterWith === 'pending'){
                return todos.filter((item,index)=>(item.isComplete === false));
            }
        },
        Filter : (type) =>{
            setFilterWith(type);
        }

    }
    
}