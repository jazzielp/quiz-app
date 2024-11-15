import { useAppDispatch } from '@/hooks/store'
import { changeMode } from '@/store/quize/slice'
import { ModeType } from '@/types/types'

interface QuizzesActions {
  setDarkMode: (mode: ModeType) => void
}

export function useQuizzesActions (): QuizzesActions {
  const dispatch = useAppDispatch()
  const setDarkMode = (mode: ModeType): void => {
    dispatch(changeMode(mode))
  }
  return { setDarkMode }
}
