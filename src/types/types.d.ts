import { MODE } from '@/consts/consts'
export type ModeType = typeof MODE[keyof typeof MODE]

export interface IQuizzes {
  quizzes: Quiz[]
}

export interface IQuiz {
  title: string
  icon: string
  questions: Question[]
}

export interface IQuestion {
  question: string
  options: string[]
  answer: string
}

export interface IGlobalState {
  quizzes: Quiz[]
  quize: Quiz
  answer: string
  mode: ModeType
}
