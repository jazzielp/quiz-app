import { useAppDispatch } from '@/hooks/store'
import {
  changeMode,
  updateQuize,
  selectedAnswer,
  updateIsAnswerCorrect,
  incrementCountAnswerCorrect,
  incrementIndexQuestion,
  updateQuizIsCompleted
}
  from '@/store/quize/slice'
import { IQuiz, ModeType } from '@/types/types'

interface QuizzesActions {
  setDarkMode: (mode: ModeType) => void
  setQuiz: (quiz: IQuiz) => void
  setUserAnswer: (answer: string) => void
  setIsAnswerCorrect: (isCorrect: boolean | undefined) => void
  setCountAnswerCorrect: () => void
  setIndexQuestion: () => void
  setQuizIsCompleted: () => void
}

export function useQuizzesActions (): QuizzesActions {
  const dispatch = useAppDispatch()
  const setDarkMode = (mode: ModeType): void => {
    dispatch(changeMode(mode))
  }

  const setQuiz = (quiz: IQuiz): void => {
    dispatch(updateQuize(quiz))
  }

  const setUserAnswer = (answer: string): void => {
    dispatch(selectedAnswer(answer))
  }

  const setIsAnswerCorrect = (isCorrect: boolean | undefined): void => {
    dispatch(updateIsAnswerCorrect(isCorrect))
  }

  const setCountAnswerCorrect = (): void => {
    dispatch(incrementCountAnswerCorrect())
  }

  const setIndexQuestion = (): void => {
    dispatch(incrementIndexQuestion())
  }

  const setQuizIsCompleted = (): void => {
    dispatch(updateQuizIsCompleted())
  }

  return { setDarkMode, setQuiz, setUserAnswer, setIsAnswerCorrect, setCountAnswerCorrect, setIndexQuestion, setQuizIsCompleted }
}
