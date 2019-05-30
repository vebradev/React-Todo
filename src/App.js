import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoData = [
  { task: "Organize Garage", id: "1528817077286", completed: false },
  { task: "Bake Cookies", id: "1528817084358", completed: false },
  { task: "Clean Room", id: "1528817344358", completed: true }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoData,
      todoTask: ""
    };
  }

  changeHandler = e => {
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

  clearList = e => {
    let newTodoList = this.state.todoList.filter(item => !item.completed);
    this.setState({ todoList: newTodoList });
  };

  render() {
    return (
      <div>
        <h3>My Todo List:</h3>

        <TodoList todoList={this.state.todoList} />

        <TodoForm
          todoTask={this.todoTask}
          placeholder="Something new to do?"
          changeHandler={this.changeHandler}
          addTask={this.addTask}
          clearTask={this.clearList}
        />
      </div>
    );
  }
}

export default App;
