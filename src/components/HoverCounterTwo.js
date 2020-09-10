import React, { Component } from 'react'

class HoverCounterTwo extends Component {
  
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.increment}> Hovering {this.props.count} times</h1>
            </div>
        )
    }
}
export default HoverCounterTwo