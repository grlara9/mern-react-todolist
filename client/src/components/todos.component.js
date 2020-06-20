import React, { Component } from 'react'
import TodoItem from './list-item.component'


const Todo =(props)=> {

    return props.todos.map(todo=>(
        <div className="todos">
            <TodoItem key={todo._id} todo={todo} delete={props.delete} />
        </div>
    ))
}

export default Todo