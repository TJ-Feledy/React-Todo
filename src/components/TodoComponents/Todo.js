import React from 'react';

function Todo(props) {
  return (
    <div className='todo'>
      <p className={`taskItem ${props.taskId.id}`}>• {props.item.task}</p>
    </div>
  );
};

export default Todo;