import { Component } from "react";
import PropClass1 from "./PropClass1";

class PropClass extends Component
{
    render()
    {
        return(
            <div>
                <h1>class prop</h1>
                <PropClass1 name="Ram" age="30"></PropClass1>
                </div>
        )
    }
}
export default PropClass