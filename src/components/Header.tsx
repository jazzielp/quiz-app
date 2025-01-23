import { useAppSelector } from '@/hooks/store'
import { SwitchDarkMode } from './SwitchDarkMode'
import { TitleQuize } from './TitleQuize'

export function Header (): JSX.Element {
  const { quiz } = useAppSelector((state) => state.quizzes)

  return (
    <header className='flex items-center justify-between xl:w-[1157px] md:w-[640px] w-[375px] px-6 md:px-0 h-[72px] mx-auto md:mt-4 xl:mt-9'>
      {quiz !== null ? <TitleQuize /> : <div />}
      <SwitchDarkMode />
    </header>
  )
}
