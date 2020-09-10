import React,{Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{
    constructor(){
        super();
        this.state={
            parentName:"Jayti"

        }
        this.greetParent=this.greetParent.bind(this)
    }


    greetParent(childName)
    {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render()
    {
        return(
        <>
       <ChildComponent greetHandler={this.greetParent}/>
        </>)
    }
}
export default ParentComponent