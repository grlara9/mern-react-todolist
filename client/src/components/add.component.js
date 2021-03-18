import React from 'react'

const AddTodo = (props)=> {
    return (
        <form onSubmit={(e) => {props.onSubmit(e)}}>
            <div className="form-group">
            <input type="text"  
                name="task"
                onChange={(e) => {props.onChange(e.target.value) }}
                placeholder="Add To-do" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
export default AddTodo