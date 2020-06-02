import React from 'react'

const TodoItem = props =>(
    <div>
        {props.todo.task} <a href="/"><button onClick={() => { props.delete(props.todo._id) }}>delete</button></a>
    </div>
)
export default TodoItem;

