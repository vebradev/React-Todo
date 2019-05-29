import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todoList.map(item => (
          <div key={item.id}>{item.task}</div>
        ))}
      </div>
    );
  }
}

export default TodoList;
