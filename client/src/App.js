import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import AddTodo from './components/add.component'
import Todo from './components/todos.component'
import Header from './components/header.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[],
      task:''

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
    axios.delete('http://localhost:5000/todo/'+ id)
    .then(promise => 

    this.setState({
      todos: [...this.state.todos.filter(todo => todo._id ===! id)]
    })
    )
  }
  onchange =(value)=>{
    this.setState({
      task:value
    })
}
onSubmit =(e) => {
    e.preventDefault()
const task = this.state.task;

        const todo ={
          task
        }
      axios.post('http://localhost:5000/todo/add', todo)
      
      .then(response => {
        this.setState({
          todos: [...this.state.todos, response.data]
        })
      })
      this.setState({task:''})
      window.location.reload();
      } 


  render(){
  return (
    <Router>

    <div className="container">
      <Header num={this.state.todos.length} />
      <Route exact path="/" render={props=> (
        <React.Fragment>

      <Todo todos={this.state.todos} delete={this.delete}/>
      <AddTodo onChange={this.onchange} onSubmit={this.onSubmit}/>
        </React.Fragment>
      )} />
    </div>
      </Router>
  )
}
}

export default App;
