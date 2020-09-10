import React,{Component} from 'react'
class RefDemo extends Component{
    constructor()
    {
        super();
        this.inputRef=React.createRef();
        this.cbRef=null;
        this.setCbRef=(element)=>
        {
            this.cbRef=element;

        }

    }
    componentDidMount()
    {
        this.inputRef.current.focus();
        console.log(this.inputRef);
        
        if(this.cbRef)
        this.cbRef.focus();
        
    }
    clickEvent=()=>
    {
     alert(this.inputRef.current.value)
    }
    clickEventAgain=()=>
    {
        alert(this.cbRef.value)

    }
    render()
    {
        console.log(this.setCbRef.value)
        return (
            <>
            <input type='text' ref={this.inputRef}></input>
            <button  onClick={this.clickEvent}>Click Me</button>
            <input type='text' ref={this.setCbRef}></input>
            <button  onClick={this.clickEventAgain}>Click Me</button>
            
        </>
        )
    }

}
export default RefDemo