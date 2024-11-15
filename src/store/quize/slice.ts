import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { quizzes } from '@/db/data.json'
import { IGlobalState, ModeType } from '@/types/types'
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
  reducers: {
    changeMode: (state, action: PayloadAction<ModeType>) => {
      state.mode = action.payload
    }
  }
})

export default quizzesSlice.reducer
export const { changeMode } = quizzesSlice.actions
