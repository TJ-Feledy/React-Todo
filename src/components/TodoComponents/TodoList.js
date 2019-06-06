import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const toDoArray = [];

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: toDoArray,
      task: '',
      id: '',
      completed: false
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  submitHandler = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    newTask.id = Date.now();

    
    this.setState({
      toDoArray: [...this.state.list, newTask]
    });
    toDoArray.push(newTask);
    this.setState({task: ''});
  };

  toggleTask = id => {
    const newTaskList = this.state.list.map(item => {
      if (item.id === id) {
        const newTaskObj = {...item, completed: !item.completed};
        return newTaskObj;
      }
      else {
        return item;
      }
    });
    this.setState({list: newTaskList});
  }

  render() {
    return (
      <div>
        <div className='todoList'>
          {this.state.list.map((item, index) => {
            return <Todo item={item} key={index} done={item} />
          })
          }
        </div>
        <TodoForm submitHandler={this.submitHandler} stateTask={this.state.task} changeHandler={this.changeHandler} />
      </div>
    )
  }
}

export default TodoList;