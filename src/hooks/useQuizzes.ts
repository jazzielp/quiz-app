import { useAppDispatch } from '@/hooks/store'
import { changeMode, updateQuize, selectedAnswer } from '@/store/quize/slice'
import { IQuiz, ModeType } from '@/types/types'

interface QuizzesActions {
  setDarkMode: (mode: ModeType) => void
  setQuiz: (quiz: IQuiz) => void
  setUserAnswer: (answer: string) => void
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
  return { setDarkMode, setQuiz, setUserAnswer }
}
