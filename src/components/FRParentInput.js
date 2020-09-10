import React,{Component} from 'react'
import FRInput from './FRInput';
class FRParentInput extends Component{
    constructor(){
        super();
        this.inputRef=React.createRef();
    }
    clickHandler=()=>{
        this.inputRef.current.focus();
    }
    render(){
        return(
            <>
            <FRInput ref={this.inputRef}/>
            <button onClick={this.clickHandler}>Focus button</button>
            </>
        )
    }
}
export default FRParentInput