import React from "react";
import TodoList from "./components/TodoComponents/TodoList";

const todoData = [
  { task: "Organize Garage", id: "1528817077286", completed: false },
  { task: "Bake Cookies", id: "1528817084358", completed: false }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoData,
      todoTask: ""
    };
  }

  changeHandler = event => {
    this.setState({
      todoTask: event.target.value
    });
  };

  addTask = () => {
    if (this.state.todoTask === "") {
      alert("Forgot what to add? Ask your mum!");
    } else {
      const newTask = {
        id: Date.now().toString(),
        task: this.state.todoTask,
        completed: false
      };

      const newTodoList = this.state.todoList.concat(newTask);

      this.setState({
        todoList: newTodoList,
        todoTask: ""
      });

    }
    console.log("Add button ran.");
  };

  clearTask = () => {
    console.log("cleared");
  }

  render() {
    return (
      <div>
        <h3>My Todo List:</h3>

        <TodoList 
          todoList={this.state.todoList}
        />

        <Todo
          todoTask={this.todoTask}
          placeholder="Something new to do?"
          changeHandler={this.changeHandler}
          addTask={this.addTask}
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}

function Todo({ todoTask, placeholder, changeHandler, addTask, clearTask }) {
  return (
    <div>
      <input type="text" value={todoTask} placeholder={placeholder} onChange={changeHandler} />
      <button onClick={addTask}>Add</button>
      <button onClick={clearTask}>Clear Completed</button>
    </div>
  );
}

export default App;
