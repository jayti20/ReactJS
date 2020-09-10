import React, { Component } from 'react'

class Answers extends Component {
    render() {
       let obj=this.props.value.concat(this.props.value2)
       console.log(obj)
      
        return (
            <div>
               {obj.map((answer)=>( <div>{answer}</div>)
                  
               )} 
                
            </div>
        )
    }
}

export default Answers
