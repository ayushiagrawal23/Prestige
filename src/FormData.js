import { useState } from "react"
function FormData()
{
    const [name,setName]=useState()
    const [age,setAge]=useState()
    const [country,setCountry]=useState()
    const [date,setDate]=useState()
    function formSubmit(e)
    {
        e.preventDefault()
        console.log(name,age,country,date)
    }
    return(
        <div>
<form onSubmit={formSubmit}>
    <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}></input><br></br>
    <input type="number" placeholder="Enter age" onChange={(e)=>setAge(e.target.value)}></input><br></br>
    Select Country
        <select onChange={(e)=>setCountry(e.target.value)}>
            <option>india</option>
            <option>japan</option>
            <option>us</option>
            <option>uk</option>
            <option>paris</option>
        </select><br></br>
        <input type="date" placeholder="Enter date" onChange={(e)=>setDate(e.target.value)}></input><br></br>
        <button>Submit</button>
</form>
Name: {name}<br></br>
Age: {age}<br></br>
Country: {country}<br></br>
Date: {date}<br></br>
        </div>
    )
}
export default FormData