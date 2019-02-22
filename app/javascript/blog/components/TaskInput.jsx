import React, { Component } from 'react';

class TaskInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskInput: "",
    }
  }


  handleTaskInputChange = (e) => {
    //  console.log(e.target.value);
    this.setState({
    taskInput: e.target.value,
    })
  }

  handleKeyPress = (event) => {
    // console.log(event.target.value);
    if(event.key == 'Enter'){
      this.props.newTask(event.target.value)
      this.setState({
        taskInput: "",
      })
    }
  }

  render() {
    return(
      <div>
        <h3>Task Input</h3>
          <input placeholder="enter task"
                 value={this.state.taskInput}
                 onChange={this.handleTaskInputChange}
                 onKeyPress={this.handleKeyPress}
          ></input>
      </div>
    );
  }
}

export default TaskInput;
