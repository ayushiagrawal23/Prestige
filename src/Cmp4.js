function Cmp4(prop)
{ 
    const data="Golu"
    return(
        <div>
        <button onClick={()=>prop.name(data)}>Submit</button>
        </div>
    )
}
export default Cmp4