import React, { Component } from 'react';


class Todo extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.todo}</h1>
                <button onClick={this.props.remove}>X</button>
            </div>
        );
    }
}


export default Todo;