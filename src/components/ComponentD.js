import React, { Component } from 'react'
import ComponentE from './ComponentE'
import UserContext from './userContext'

class ComponentD extends Component {
    static contextType=UserContext
    render() {
        return (
          <>
               
                <div>Hello ComponemmmntD {this.context}</div>
                <ComponentE/>
                </>
        )
    }
}
//ComponentD.contextType=UserContext
export default ComponentD
