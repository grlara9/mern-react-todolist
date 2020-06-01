import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios'
import AddTodo from './components/add.component'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/todo')
    .then((response) => this.setState({
      todos: response.data
    })
    )
  }
  render(){
  return (
    <div className="container">
      <AddTodo />
      
    </div>
  );
}
}

export default App;
