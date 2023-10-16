import {useState} from "react"
import {useEffect} from "react"
function Hook()
{
    useEffect(()=>{
        console.log("LOADING.....")
    })
    const[name,setName]=useState("Ram")
    return(
        <div>
            <h1> My name is {name}</h1>
            <button onClick={()=>setName("Syam")}>Submit</button>
        </div>
    )
}
export default Hook