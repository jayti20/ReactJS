import React,{Component} from 'react'


class EventBind extends Component{

    constructor(){
        super();
        this.state={
            message:'Hello Jaytu!'
        }
        this.clickHandler=this.clickHandler.bind(this);
    }
 /* clickHandler(){
      this.setState({
          message:'GoodBye'
      })
  }*/
  clickHandler=()=>{
      return(
    this.setState({
        message:'GoodBye'
    })
      )
}

    render()
    {
     return (
         <>
         <div>{this.state.message}</div>
         {/*<button onClick={this.clickHandler.bind(this)}>Click Me</button>
         <button onClick={()=>this.clickHandler()}>Click Me</button>*/}
         <button onClick={this.clickHandler}>Click Me</button>

         
         </>
     )
    }
}
export default EventBind