import React from "react";
import BackspaceTwoToneIcon from '@material-ui/icons/BackspaceTwoTone';
const TodoItem = (props)=> {
   
return (
    <React.Fragment>

    <div className="list-items">
      {props.todo.task}
    </div>
      <div className="delete-button">

      <a href="/"><button onClick={() => { props.delete(props.todo._id) }}> <BackspaceTwoToneIcon />  </button></a>
      </div>
    </React.Fragment>
  );
}

export default TodoItem;
