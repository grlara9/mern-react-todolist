import React, { Component } from 'react'

class AddTodo extends Component {
    render() {
        return (
            <div>
            <form>
                <div className="form-group">
                
                <input type="text" className="form-control"  placeholder="Add To-do" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        )
    }
}
export default AddTodo