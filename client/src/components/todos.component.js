import React, { Component } from 'react'
import TodoItem from './list-item.component'

class Todo extends Component {



   
render() {
    return this.props.todos.map(todo=>(
        <div className="todos">
            <TodoItem key={todo._id} todo={todo} delete={this.props.delete} />
        </div>
    ))
}
}
export default Todo