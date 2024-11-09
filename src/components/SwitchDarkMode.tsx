import { IconMoodDark } from '@/assets/icons/IconMoonDark'
import { IconSunDark } from '@/assets/icons/IconSunDark'

export function SwitchDarkMode (): JSX.Element {
  return (
    <div className='flex items-center justify-between gap-3'>
      <IconSunDark />
      <div className='w-8 rounded-[999px] p-1 bg-purpol'>
        <div className='size-3 bg-white rounded-full' />
      </div>
      <IconMoodDark />
    </div>
  )
}
