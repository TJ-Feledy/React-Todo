import React from 'react';
import moment from 'moment';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';

function App() {
 
  return (
    <div>
      <h1>Today's list of important things To Do!</h1>
      <div className='todaysDate'>{moment().format('MMM Do YYYY')}</div>
      <TodoList />
    </div>
  );
}

export default App;
