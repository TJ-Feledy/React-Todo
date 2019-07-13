import React from 'react';

function Todo(props) {

const clickHandler = () => {
  props.toggleTask(props.item.id)
}

  return (
    <div className='todo'>
      <p className={`taskItem ${props.done.completed ? 'completed' : ''}`} onClick={clickHandler} >• {props.item.task}</p>
    </div>
  );
};

export default Todo;