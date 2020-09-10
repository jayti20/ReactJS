import React,{ Component } from "react"

class ClassClick extends Component{

  clickHandler(){
      console.log("Class me clicked")
  }

    render(){
        return(
            <div>
            <button onClick={this.clickHandler}>Click me in class component</button>
            </div>
        )
    }
}
export default ClassClick