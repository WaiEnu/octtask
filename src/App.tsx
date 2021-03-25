import React, { useState } from 'react';
import './App.css'
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';

const App: React.FC = () => {
  return (
    <div className="lex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <TaskInput />
      <TaskList />
    </div>
  )
}

export default App