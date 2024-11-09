import { SwitchDarkMode } from './SwitchDarkMode'
import { TitleQuize } from './TitleQuize'
export function Header (): JSX.Element {
  return (
    <header className='flex items-center justify-between w-[375px] h-[72px] m-auto'>
      <TitleQuize />
      <SwitchDarkMode />
    </header>
  )
}
