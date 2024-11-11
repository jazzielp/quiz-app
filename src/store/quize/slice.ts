import { createSlice } from '@reduxjs/toolkit'
import { quizzes } from '@/db/data.json'
import { IGlobalState } from '@/types/types'
import { MODE } from '@/consts/consts'

const initialState: IGlobalState = {
  quizzes,
  quize: [],
  answer: '',
  mode: MODE.dark
}

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {}
})

export default quizzesSlice.reducer
