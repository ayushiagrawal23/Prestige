const { useRef } = require("react")

function RefFun()
{
    const inputref=useRef()
    function hello()
    {
        inputref.current.value="Hello world";
        inputref.current.style.color="red";
        inputref.current.style.backgroundColor="green";
    }

    return(
    <div>
<input type="text" placeholder="Enter name" ref={inputref}/><br></br>
<button onClick={()=>hello()}>Submit</button>
    </div>
  )

}
export default RefFun