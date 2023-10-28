const { Component, createRef } = require("react")

class Ref  extends Component
{
    constructor()
    {
        super()
    this.inputref=createRef()

    }
    hello()
    {
        this.inputref.current.value="Hello world";
        this.inputref.current.style.color="red";
        this.inputref.current.style.backgroundColor="green";
    }
  render()
  {
    return(
    <div>
<input type="text" placeholder="Enter name" ref={this.inputref}/><br></br>
<button onClick={()=>this.hello()}>Submit</button>
    </div>
  )
  }
}
export default Ref