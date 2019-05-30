import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todoList.map(item => {
          return (
            <Todo 
              completeTask={this.props.completeTask}
              key={item.id} 
              id={item.id} 
              task={item.task}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
