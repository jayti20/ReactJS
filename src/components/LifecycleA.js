import React,{Component} from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            name :'Vishwas',
            count:1
        }
        console.log('Parent constructor')
    }
   static getDerivedStateFromProps(props,state){
       console.log('LifeCycle A getderivedstatefromprops')
       return null;
   }
   shouldComponentUpdate()
   {
       console.log("LifeCycle A shouldcomponentupdate ")
       return true
   }
   getSnapshotBeforeUpdate(prevProps, prevState)
   {
       console.log("LifeCycle A getsnapshotbeforeupdate")
       return null
   }
   componentDidUpdate()
   {
       console.log("LifeCycle A componentdidupdate")
   }

   componentDidMount(){
       console.log('Parent componentDidMount')
   }
   changeState=()=>{
      this.setState({
          count:this.state.count+1
      })
      if(this.state.count%2!=0)
      {
          this.setState({
              name:'Codevolution'
          })
      }
      else
      {
        this.setState({
            name:'Vishwas'
        })  
      }
       
   }

   render()
   {
       console.log('Parent rendered')
       return (
           <>
           <div>{this.state.name}</div>

           <div>LifecycleA</div>
           {/*In order to trigger update lifecycle methods, we need to change the state of the class component in order to have the dom updated. */}
           <button onClick={this.changeState}>Change state</button>
           <LifecycleB/>
           </>
       )
   }

}
export default LifecycleA