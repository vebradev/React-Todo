import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div className="controls">
        <input
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.inputChange}
          onKeyPress={this.props.pressEnter}
        />
        <button className="add" onClick={this.props.addTask}>Add</button>
        <button className="clear" onClick={this.props.clearTask}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
