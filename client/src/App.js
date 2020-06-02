import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios'
import AddTodo from './components/add.component'
import Todo from './components/todos.component'
import Header from './components/header.component'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/todo/')
    .then((response) => {
    this.setState({
      todos: response.data
    })
  })
  .catch((error)=>{
    console.log(error)
  })
  }

  delete = (id) => {
    axios.delete('http://localhost:5000/todo/'+id)
    .then(promise => console.log(promise));

    this.setState({
      todos: this.state.blogs.filter(todo => todo._id ===! id)
    })
  }
  render(){
  return (
    <div className="container">
      <Header num={this.state.todos.length} />
      <Todo todos={this.state.todos} delete={this.delete}/>
      <AddTodo />
    </div>
  );
}
}

export default App;
