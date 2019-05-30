import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <input
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.inputChange}
        />
        <button onClick={this.props.addTask}>Add</button>
        <button onClick={this.props.clearTask}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
