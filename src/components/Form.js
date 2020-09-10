import React,{Component} from 'react'
class Form extends Component{
    constructor(){
        super();
        this.state={
            username:' ',
            comments:' ',
            topic:' ',
            
        }
    }
    handleUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleComments=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }

    handleTopic=(event)=>{
        this.setState({
           topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
        this.setState({submitted:true},()=>{
            alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        })
        event.preventDefault();
    }
    render()
    {
        return(
       <>
            <form onSubmit={this.handleSubmit}>
            <label>UserName</label>
            <input value={this.state.username} onChange={this.handleUsername}></input>
            <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
            </div>
            <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopic}>
            
            <option value="react">React</option>
            <option value="nodejs">Node Js</option>
            <option value="javascript">Javascript</option>
            </select>
            </div>
            <div>Hello {this.state.username}</div>
            
            <button type="submit">Submit</button>
            </form>
            </>
           

        )

    }
}
export default Form