import React, { useState } from 'react';
import './App.css'
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';

const App: React.FC = () => {
  return (
    <div>
      <TaskInput />
      <TaskList />
    </div>
  )
}

export default App