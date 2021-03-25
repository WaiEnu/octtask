import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../modules/tasksModule'

const TaskInput: React.FC = () => {
  const dispatch = useDispatch()

  const [ inputTitle, setInputTitle ] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value)
  }

  const handleSubmit = () => {
    if(inputTitle){
      dispatch(addTask(inputTitle))
    }else{
      alert('入力してください!')
    }
    setInputTitle('')
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
        <div className="mb-6">
          <input
            type="text"
            className="w-5/6 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            placeholder=""
            value={inputTitle}
            onChange={handleInputChange}
          />
          <span className="w-1/6 pl-1">
            <button className="px-3 py-2 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none" onClick={handleSubmit}>追加</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default TaskInput