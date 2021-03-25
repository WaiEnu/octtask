import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'
import { RootState } from '../rootReducer'


const TaskList: React.FC = () => {

  const { tasks } = useSelector((state: RootState) => state.tasks)

  return (
    <div className="container mx-auto">
    {
      tasks.length <= 0 ? '登録されたTODOはありません。' :
      <ul className="max-w-md mx-auto my-10 p-0 ">
        { tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        )) }
        </ul>
    }
    </div>
  )
}

export default TaskList