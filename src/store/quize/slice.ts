import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { quizzes } from '@/db/data.json'
import { IGlobalState, ModeType, IQuiz } from '@/types/types'
import { MODE } from '@/consts/consts'

const initialState: IGlobalState = {
  quizzes,
  quiz: null,
  userAnswer: '',
  mode: MODE.dark,
  indexQuestion: 0,
  isAnswerCorrect: undefined,
  countAnswerCorrect: 0
}

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<ModeType>) => {
      state.mode = action.payload
    },
    updateQuize: (state, action: PayloadAction<IQuiz>) => {
      state.quiz = action.payload
    },
    selectedAnswer: (state, action: PayloadAction<string>) => {
      state.userAnswer = action.payload
    },
    updateIsAnswerCorrect: (state, action: PayloadAction<boolean>) => {
      state.isAnswerCorrect = action.payload
    }
  }
})

export default quizzesSlice.reducer
export const { changeMode, updateQuize, selectedAnswer, updateIsAnswerCorrect } = quizzesSlice.actions
