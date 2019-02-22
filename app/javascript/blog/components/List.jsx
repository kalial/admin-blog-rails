import React, { Component } from 'react';
import Task from './Task';


class List extends Component {
  render() {
    return (
      <div>
        <h3> List...</h3>
          <ul>
            {
              this.props.tasks.map( (task) => {
                return (
                  <li> <Task task={task} /> </li>
                );
              })
            }
          </ul>
      </div>
    );
  }
}

export default List;
