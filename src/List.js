function List()
{
var arr=["ram","syam","sita"]
for(var i=0;i<=arr.length;i++)
{
    console.log=(arr[i]);
} 

    return(
        <div>
            {
                arr.map((item)=>
                <h1>{item}</h1>)
            }
        </div>
    )
}
export default List