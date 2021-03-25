import React from 'react'
import { Task } from '../modules/Types'
import { useDispatch } from 'react-redux'
import { doneTask, deleteTask } from '../modules/tasksModule'

type Props = {
  task: Task
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <li
    className={task.done ? 'done' : ''}>
      <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm flex">
        <span
          className="w-5/6 px-3 py-2 placeholder-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        >
          <label>
            <input
              type="checkbox"
              onClick={() => dispatch(doneTask(task))}
              defaultChecked={ task.done }
            />
            <span className="pl-1">{ task.title }</span>
          </label>
        </span>
        <span className="w-1/6 pl-1">
          <button className="px-3 py-2 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none" 
          onClick={() => dispatch(deleteTask(task))}
        >削除</button></span>
      </div>
    </li>
  )
}
 
export default TaskItem