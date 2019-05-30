import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const initialTodoData = [
  { task: "Write simple scripts", id: "1528817077286", completed: false },
  { task: "Use functions", id: "1528817084358", completed: false },
  { task: "Learn React", id: "1528817344358", completed: false }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: initialTodoData,
      todoTask: ""
    };
  }

  inputChange = e => {
    this.setState({
      todoTask: e.target.value
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
  };

  pressEnter = e => {
    const keycode = e.keyCode ? e.keyCode : e.which;
    if (keycode === 13) {
      this.addTask();
    }
  };

  completeTask = e => {
    e.target.classList.toggle("completed");

    let newTodoList = this.state.todoList.map(item => {
      if (item.id === e.target.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({
      todoList: newTodoList
    });
  };

  clearList = e => {
    let newTodoList = this.state.todoList.filter(item => !item.completed);
    this.setState({ todoList: newTodoList });
  };

  render() {
    return (
      <>
        <h3>Frontend checklist</h3>

        <TodoList
          todoList={this.state.todoList}
          completeTask={this.completeTask}
        />

        <TodoForm
          value={this.state.todoTask}
          todoTask={this.todoTask}
          placeholder="Something new to do?"
          inputChange={this.inputChange}
          pressEnter={this.pressEnter}
          addTask={this.addTask}
          clearTask={this.clearList}
        />
      </>
    );
  }
}

export default App;
