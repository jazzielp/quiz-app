import { MODE } from '@/consts/consts'
import { ModeType } from '@/types/types'
export function setDarkModeInHTML (mode: ModeType): void {
  const htmlElement = document.documentElement
  if (htmlElement !== null || htmlElement !== undefined) {
    if (mode === MODE.dark) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }
}
