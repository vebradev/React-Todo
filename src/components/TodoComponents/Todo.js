import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  render() {
    return <div id={this.props.id}>{this.props.task}</div>;
  }
}

export default Todo;
