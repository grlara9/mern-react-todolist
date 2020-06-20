import React, { Component } from "react";

const TodoItem = (props)=> {
   
return (
    <React.Fragment>

    <div className="list-items">
      {props.todo.task}
    </div>
      <div className="delete-button">

      <a href="/"><button onClick={() => { props.delete(props.todo._id) }}>x</button></a>
      </div>
    </React.Fragment>
  );
}

export default TodoItem;
