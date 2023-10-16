import { useState } from "react"

function FunFun()
{    
    // var name="Aayushi"
    var [name,setName]=useState("Aayushi")
        function hello()
   {
    // name="Aayu"
    setName("Aayu")
   }

    return(
        <div>
            <h1>My name is {name}</h1>
            <button onClick={hello}>Submit</button>
        </div>
    )
}
export default FunFun