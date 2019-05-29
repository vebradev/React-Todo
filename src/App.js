import React from "react";

const todoData = [
  { task: "Organize Garage", id: "1528817077286", completed: false },
  { task: "Bake Cookies", id: "1528817084358", completed: false }
];

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoData,
      todoTask: '',
    };
  }

  eventHandler = (event) => {
    this.setState({
      todoTask: event.target.value,
    });
  }

  addTask = () => {
    const newTask = {
      id: Date.now().toString(),
      task: this.state.todoTask,
      completed: false,
    };

    const newTodoList = this.state.todoList.concat(newTask);

    this.setState({
      todoList: newTodoList,
      todoTask: '',
    });

    console.log("Task added.");
  }

  render() {
    return (
      <div>
        <h3>My Todo List:</h3>

        {
          this.state.todoList.map(item => (
            <div key={item.id}>
              {item.task}
            </div>
          ))
        }

        <Todo 
          eventHandler = {this.eventHandler}
          addTask = {this.addTask}
        />
      </div>
    );
  }
}

function Todo({ eventHandler, addTask }) {
  return (
    <div>
      <input onChange={eventHandler}/>
      <button onClick={addTask}>Add</button>
      <button>Clear Completed</button>
    </div>
  );
}

export default App;
