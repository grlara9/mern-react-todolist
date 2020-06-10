import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state={
            task:''
        }
    }
    
    onchange =(e)=>{
        const {name, value}=e.target;
        this.setState({
            [name]:value
        })
    }
    onSubmit =(e) => {
        e.preventDefault()
        this.props.add(this.state.task);
            this.setState({task:''})
        } 
        
render() {
    return (
        
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <input type="text"  
                    name="task"
                    value={this.state.task}
                    onChange={this.onchange}
                    placeholder="Add To-do" />
                </div>
                <button type="submit">Submit</button>
            </form>
        
        )
    }
}
export default AddTodo