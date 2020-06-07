import React, { Component } from "react";

 class TodoItem extends Component {
   
  
  
  render() {
    return (
      <div className="list-items">
        {this.props.todo.task}
        <a href="/"><button onClick={() => { this.props.delete(this.props.todo._id) }}>x</button></a>
      </div>
    );
  }
}
export default TodoItem;
