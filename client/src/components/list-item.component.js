import React, { Component } from "react";

 class TodoItem extends Component {
   
  
  
  render() {
    return (
      <React.Fragment>

      <div className="list-items">
        {this.props.todo.task}
      </div>
        <div className="delete-button">

        <a href="/"><button onClick={() => { this.props.delete(this.props.todo._id) }}>x</button></a>
        </div>
      </React.Fragment>
    );
  }
}
export default TodoItem;
