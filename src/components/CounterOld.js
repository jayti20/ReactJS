import React,{Component} from 'react';

class CounterOld extends Component{

constructor(){
    super();
    this.state={
        count:0
    }
}

incrementCount(){
    /*Scenario 1
    this.state.count=this.state.count+1;
    console.log(this.state.count);*/
/*Scenario 2
  this.setState({
        count:this.state.count+1
    },()=>{console.log("Callback count value",this.state.count)})
    console.log(this.state.count)*/
    //Scenario 3 
    this.setState((prevState)=>({count:prevState.count+1}))
    console.log(this.state.count);
}

incrementFive(){
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
}

    render(){
        return(
            <div>
            {this.state.count}
          
            <button onClick={()=>{/*this.incrementCount()*/ this.incrementFive()}}>Increment</button>
            </div>
        )
    }
}
export default CounterOld;
