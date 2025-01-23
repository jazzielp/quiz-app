import { Header } from './Header'
import { Main } from './Main'
import { QuizResult } from './QuizResult'

export function QuizCompleted (): JSX.Element {
  return (
    <>
      <Header />
      <Main>
        <div className=''>
          <h1 className='w-72 md:w-[444px] lx:w-[465px] text-[40px] leading-tight  md:text-[64px] text-darkNavy dark:text-white text-wrap font-light'>Quiz completed <span className='font-medium'>You scored...</span></h1>
        </div>
        <div className='xl:w-[528px] md:w-[640px] w-[327px]'>
          <QuizResult />
          <button className='w-full h-[92px] rounded-3xl bg-purpol hover:opacity-50 transition-opacity text-[28px] text-white font-rubik font-medium'>Play again</button>
        </div>
      </Main>
    </>
  )
}
