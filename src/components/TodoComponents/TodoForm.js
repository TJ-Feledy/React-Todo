import React from 'react';

function TodoForm (props) {
  return (
    <div className='todoForm'>
      <form onSubmit={props.submitHandler}>
        <input
          type='text'
          value={props.stateTask}
          onChange={props.changeHandler}
          placeholder='New Task'
          name='task'
        />
        <button type='submit'>Add Task</button>
        <button className='clear' type='button' onClick={props.clearCompleted} >Clear Completed Tasks</button>
      </form>
    </div>
  ) 
}

export default TodoForm;