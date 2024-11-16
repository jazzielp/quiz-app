import { SwitchDarkMode } from './SwitchDarkMode'
import { TitleQuize } from './TitleQuize'
export function Header (): JSX.Element {
  return (
    <header className='flex items-center justify-between max-w-[1157px] min-w-[375px] px-6 md:px-16 lg: h-[72px] m-auto'>
      <TitleQuize />
      <SwitchDarkMode />
    </header>
  )
}
