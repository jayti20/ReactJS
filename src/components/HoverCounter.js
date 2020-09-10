import React, { Component } from 'react'
import withCounter from './withCounter'
class HoverCounter extends Component {
  
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.increment}>{this.props.name} Hovering {this.props.count} times</h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter,10)
