import { SwitchDarkMode } from './SwitchDarkMode'
import { TitleQuize } from './TitleQuize'
export function Header (): JSX.Element {
  return (
    <header className='flex items-center justify-between lg:w-[1157px] md:w-[640px] w-[375px] px-6 md:px-0 h-[72px] m-auto'>
      <TitleQuize />
      <SwitchDarkMode />
    </header>
  )
}
