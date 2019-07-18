import React, { Component } from 'react';
import uuid from "uuid/v4";

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {todo: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
          [evt.target.name]: evt.target.value
        });
      }
  
      handleSubmit(evt){
        evt.preventDefault();
        const newTodo = {...this.state, id: uuid() };
        this.props.createTodo(newTodo);
        this.setState({
          todo: ""
        });
      }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="todo">Todo</label>
              <input 
              type='text'
              name="todo"
              value={this.state.todo}
              onChange={this.handleChange}
              id="todo"></input>
            </div>
            <button>Add New Todo</button>
          </form>
        );
    }
}


export default NewTodoForm;