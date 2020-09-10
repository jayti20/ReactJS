import React,{Component} from 'react'
class Input extends Component{
    constructor()
    {
        super();
        this.inputRef=React.createRef();
    }
    focusInput=()=>{
        this.inputRef.current.focus();
    }
   render()
   {
       return(
          <input type='text' ref={this.inputRef}></input>
       )
   }
} 
export default Input