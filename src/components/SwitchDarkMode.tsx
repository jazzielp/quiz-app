import { IconMoonDark } from '@/assets/icons/IconMoonDark'
import { IconMoonLight } from '@/assets/icons/IconMoonLight'
import { IconSunDark } from '@/assets/icons/IconSunDark'
import { IconSunLight } from '@/assets/icons/IconSunLight'
import { MODE } from '@/consts/consts'
import { useAppSelector } from '@/hooks/store'

export function SwitchDarkMode (): JSX.Element {
  const { mode } = useAppSelector((state) => state.quizzes)
  return (
    <div className='flex items-center justify-between gap-3'>
      {mode === MODE.light ? <IconSunDark /> : <IconSunLight />}
      <div className='w-8 rounded-[999px] p-1 bg-purpol'>
        <div className='size-3 bg-white rounded-full' />
      </div>
      {mode === MODE.light ? <IconMoonDark /> : <IconMoonLight />}
    </div>
  )
}
