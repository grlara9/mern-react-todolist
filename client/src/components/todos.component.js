import React, { Component } from 'react'

const TodoItem = props =>(
    <div>
        {props.todo.task}
    </div>
)
class Todo extends Component {

   
    render() {
       
          return this.props.todos.map((todo)=>(
           <TodoItem key={todo._id} todo={todo} delete={this.delete} />
          ))
        
    }
}
export default Todo