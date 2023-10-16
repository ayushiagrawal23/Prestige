import { Component } from "react";

class Update extends Component
{
    constructor()
{
        super()
        this.state=
        {
           count:0
        }
}
    componentDidUpdate()

{
    console.log("Component Did Update")
}
shouldComponentUpdate()
{
    if(this.state.count<5)
    {
        console.log("Should ComponentUpdate")
        return true
    }
}
    render()
{
        console.log("Render")
        return(
        <div>
           <h1> Count {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Submit</button>
        </div>
    )
}
}
export default Update