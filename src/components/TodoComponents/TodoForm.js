import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.todoTask}
          placeholder={this.props.placeholder}
          onChange={this.props.changeHandler}
        />
        <button onClick={this.props.addTask}>Add</button>
        <button onClick={this.props.clearTask}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
