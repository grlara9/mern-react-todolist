import React, { Component } from 'react'


const TodoItem = props =>(
    <div className="list-items">
        {props.todo.task} <a href="/"><button onClick={() => { props.delete(props.todo._id) }}>x</button></a>
    </div>
)

class Todo extends Component {


todoList =() =>{
    
    return this.props.todos.map((todo)=>(
        <div className="todos">
        <TodoItem key={todo._id} todo={todo} delete={this.props.delete} />
        </div>
    ))
}
   
render() {
    return(
        <React.Fragment>

            {this.todoList()}

        </React.Fragment> 
    )
}
}
export default Todo