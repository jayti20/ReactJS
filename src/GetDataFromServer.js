import React, { Component } from 'react'
import axios from 'axios'
import Answers from './components/Answers'

class GetDataFromServer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMessage:''
        }
    }
    componentDidMount(){
        axios.get('https://opentdb.com/api.php?amount=10').then(response=>{
            console.log(response);
            this.setState({
                posts:response.data.results
            })
        }).catch(error=>{
            console.log(error)
            this.setState({
                errorMessage:'Error in displaying posts'
            })
        })
    }
    
    render() {
        return (
            <div>
               List of posts 
               {
                  this.state.posts.length?this.state.posts.map((post,index)=><div key={index}>{post.question}
                  <Answers value={post.incorrect_answers} value2={post.correct_answer}/></div>):null
               }
               {this.state.errorMessage?<div>{this.state.errorMessage}</div>:null}
            </div>
        )
    }
}

export default GetDataFromServer
