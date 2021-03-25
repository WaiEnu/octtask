import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Task } from './component/Types';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';

const initialState: Task[] = [
  {
    id: 2,
    title: '次にやるやつ',
    done: false
  },{
    id: 1,
    title: 'はじめにやるやつ',
    done: true
  }
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
        <TaskInput setTasks={setTasks} tasks={tasks} />
        <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  )
}
export default App;
