import React,{Component} from 'react';
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComponent from './MemoComponent';

class Parent extends Component{
    constructor()
    {
        super();
        this.state={
            name:'Vishwas',
            arr:[1,2,3]
        }
    }
    componentDidMount()
    {
    

    
        
        setInterval(()=>{
            
            this.setState({
                name:'Vishwas',
                
               
            })
           
        },2000)
    }
    render()
    {
        console.log("Parent")
        return(
            <>
            
            Parent Component
            <MemoComponent name={this.state.name}/>
           {/* <RegularComp props={this.state.name}/>
        <PureComp props={this.state.name}/>*/}
            </>
        )
    }
}

export default Parent