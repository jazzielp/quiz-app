import { IconMoonDark } from '@/assets/icons/IconMoonDark'
import { IconMoonLight } from '@/assets/icons/IconMoonLight'
import { IconSunDark } from '@/assets/icons/IconSunDark'
import { IconSunLight } from '@/assets/icons/IconSunLight'
import { MODE } from '@/consts/consts'
import { ModeType } from '@/types/types'
import { useAppSelector } from '@/hooks/store'
import { useQuizzesActions } from '@/hooks/useQuizzes'
import { setDarkModeInHTML } from '@/services/darkMode'

export function SwitchDarkMode (): JSX.Element {
  const { mode } = useAppSelector((state) => state.quizzes)
  const { setDarkMode } = useQuizzesActions()

  const handleClick = (mode: ModeType): void => {
    const sendMode = mode === MODE.light ? MODE.dark : MODE.light
    setDarkMode(sendMode)
    setDarkModeInHTML(sendMode)
  }
  return (
    <div onClick={() => handleClick(mode)} className='flex items-center justify-between gap-3'>
      {mode === MODE.light ? <IconSunDark /> : <IconSunLight />}
      <div className='w-8 rounded-[999px] p-1 bg-purpol hover:cursor-pointer'>
        <div className={`size-3 bg-white rounded-full transform transition-transform duration-300 ease-in-out ${mode === MODE.dark ? 'translate-x-3' : 'translate-x-0'}`} />
      </div>
      {mode === MODE.light ? <IconMoonDark /> : <IconMoonLight />}
    </div>
  )
}
