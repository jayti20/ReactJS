import React,{Component} from 'react'
import Input from './Input'
class FocusInput extends Component{
    constructor()
    {
        super();
        this.componentRef=React.createRef();
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput();
    }
   render()
   {
       return(
           <>
           <Input ref={this.componentRef}/>
           <div>
           <button onClick={this.clickHandler}>Focus Input</button>
           </div>
           </>
       )
   }
} 
export default FocusInput