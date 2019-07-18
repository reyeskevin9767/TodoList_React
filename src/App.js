import React, {Component} from 'react';
import TodoList from "./TodoList";
import Todo from "./Todo";
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
