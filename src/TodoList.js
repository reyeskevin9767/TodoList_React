import React, { Component } from 'react';
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = { todos: []};
        this.create = this.create.bind(this);
    }

    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
    });
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    render(){
        const todos = this.state.todos.map(todo => (
            <Todo 
            key = {todo.id}
            id = {todo.id}
            todo={todo.todo}
            remove={() => this.remove(todo.id)}
            />
        ));

        return(
            <div>
            <NewTodoForm createTodo={this.create} />
            {todos}
            </div>
        );
    }
}


export default TodoList;