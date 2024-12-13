import { MODE, BG_COLOR_QUIZZES } from '@/consts/consts'
export type ModeType = typeof MODE[keyof typeof MODE]
export type QuizzesType = keyof typeof BG_COLOR_QUIZZES

export interface IQuizzes {
  quizzes: IQuiz[]
}

export interface IQuiz {
  title: string
  icon: string
  questions: IQuestion[]
}

export interface IQuestion {
  question: string
  options: string[]
  answer: string
}

export interface IGlobalState {
  quizzes: IQuiz[]
  quiz: IQuiz | null
  userAnswer: string
  mode: ModeType
  indexQuestion: number
  isAnswerCorrect: undefined | boolean
  countAnswerCorrect: number
}
