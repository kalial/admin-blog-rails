import React, { Component } from 'react';
import TaskInput from './TaskInput';
import Task from './Task';
import List from './List';

/*
  - Task has a text(String); and isDone: True or False
  - User  input, pres Enter to Add new task
  - User Click a task or <List/> to make a task as done.
*/
class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        tasks: [{text: "Lern React",
                 isDone: true
               }],
      }
  }

  addNewTask = (newTaskText) => {
    console.log(newTaskText)
    const newTask = { text: newTaskText, isDone: false };
    this.setState((state) => {
      return { tasks: [...state.tasks, newTask] };
    });
  }



  render() {
    return (
      <div>
        <TaskInput newTask={this.addNewTask} />
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
