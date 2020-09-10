import React,{Component} from 'react'
class LifecycleB extends Component{
    constructor(props)
    {
        super(props)
        this.state={        name:'Vishwas'
        }
        console.log('Child constructor')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('Child getDerivedStateFromProps ')
        return null;
    }
    shouldComponentUpdate()
    {
        console.log("LifeCycle B shouldcomponentupdate ")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("LifeCycle B getsnapshotbeforeupdate")
        return null
    }
    componentDidUpdate()
    {
        console.log("LifeCycle B componentdidupdate")
    }
    componentDidMount(){
        console.log('Child componentDidMount')
    }
    render(){
        console.log('Child rendered')
     return(<>
        <div>LifecycleB</div>
        </>)
        
    }
}
export default LifecycleB