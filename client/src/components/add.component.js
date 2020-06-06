import React, { Component } from 'react'
import axios from 'axios'

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state={
            task:''
        }
    }
    onchange =(e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    onSubmit =(e) => {
        e.preventDefault()

        const todo ={
            task: this.state.task
         }
        axios.post('http://localhost:5000/todo/add',todo)
        .then(res =>console.log(res.data))
            this.setState({
                task: ''
            })
        }

render() {
    return (
        
            <form onClick={this.onSubmit}>
                <div className="form-group">
                <input type="text" className="form-control"  
                    name="task"
                    value={this.state.task}
                    onChange={this.onchange}
                    placeholder="Add To-do" />
                </div>
                <button type="submit" >Submit</button>
            </form>
        
        )
    }
}
export default AddTodo