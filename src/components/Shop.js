import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Shop extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            response=>{
                console.log(response)
                this.setState({
                    posts:response.data
                })
            }
        ).catch(error=>{
            console.log(error)
        })
    }
    render()
    {
        return (
            <div>
               <h1>Shop page</h1> 
               <ul>
             {
                   this.state.posts.length?this.state.posts.map(post=><div key={post.id}><Link to={`shop/${post.id}`}>{post.title}</Link></div>):null
               }
               </ul>
            </div>
        )
    }
    
}

export default Shop
