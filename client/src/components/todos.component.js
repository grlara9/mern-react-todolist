import React, { Component } from 'react'
import TodoItem from './todo-item.component'

class Todo extends Component {

   
    render() {
       
          return this.props.todos.map((todo)=>(
           <TodoItem key={todo._id} todo={todo} delete={this.props.delete} />
          ))
        
    }
}
export default Todo