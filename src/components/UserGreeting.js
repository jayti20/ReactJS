import React,{Component} from 'react'
class UserGreeting extends Component{
    constructor(){
        super();
        this.state={isLoggedIn:false} 
    }

    render()
    {
        {/* If else Approach
        if(this.state.isLoggedIn)
        {
        return(<div>
            Welcome Vishwas</div>)
        }
        else
        {
            return(<div>
                Welcome Guest</div>)  
        }
    */}

    {/*Element-variable Approach
        let message
    if(this.state.isLoggedIn)
    message=<div>Welcome Vishwas</div>
    else
    message=<div>Welcome Guest</div>

    return (<>{message}</>)
    */}
    {/* Ternary Conditional Operator
     return(
         this.state.isLoggedIn?(<div>Welcome Vishwas</div>):(<div>Welcome Guest</div>)
     )
     */}

     return(
         this.state.isLoggedIn && (<div>Welcome Vishwas</div>)
     )
}
}
export default UserGreeting