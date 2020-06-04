import React from 'react'

const TodoItem = props =>(
    <div className="list-items">
        {props.todo.task} <a href="/"><button onClick={() => { props.delete(props.todo._id) }}>x</button></a>
    </div>
)
export default TodoItem;

