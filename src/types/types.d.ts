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
