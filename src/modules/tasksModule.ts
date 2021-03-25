import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from './Types'

type State = {
  max: number
  remain: number
  count: number
  tasks: Task[]
}

const initialState: State = {
  max: 8,
  remain: 8,
  count: 0,
  tasks: []
}

const tasksModule = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask (state: State, action: PayloadAction<string>) {
      if (state.count < state.max){
        state.count++
        state.remain++
      }

      const newTask: Task = {
        id: state.count,
        title: action.payload,
        done: false
      }

      state.tasks = [newTask, ...state.tasks]
    },
    doneTask (state: State, action: PayloadAction<Task>) {
      const task = state.tasks.find(t => t.id === action.payload.id)
      if (task) {
        task.done = !task.done
        state.remain--
      }
    },
    deleteTask (state: State, action: PayloadAction<Task>) {
      state.tasks = state.tasks.filter(t =>
        t.id !== action.payload.id
      )
    }
  }
})

export const {
  addTask, doneTask, deleteTask
} = tasksModule.actions

export default tasksModule