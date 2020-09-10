import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:'',
             isSubmitted:'false'
        }
    }
   changeHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        console.log(this.state)
    }
    submitHandler=(event)=>{
        event.preventDefault();
        
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then(response=>{
            console.log(response)
            this.setState({isSubmitted:'true'})
        }).catch(error=>{
            console.log(error)

        });
        
    }

    
    render() {
        return (
            <div>
            <form onSubmit={this.submitHandler}>
            <div>
            <input type="text" name="userId" value={this.state.userId} onChange={this.changeHandler}/>   
            </div>
            <div>
            <input type="text" name="title" value={this.state.title} onChange={this.changeHandler}/>   
            </div>
            <div>
            <input type="text" name="body" value={this.state.body} onChange={this.changeHandler}/>   
            </div>
            <div>
            <button type="submit">Submit</button>
            </div>
            </form>
            <div>
           {this.state.isSubmitted?<div>{this.state.body}</div>:null }
            </div>
            
            </div>
        )
    }
}

export default PostForm
