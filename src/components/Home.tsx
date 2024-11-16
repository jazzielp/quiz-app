import { Header } from '@/components/Header'
import { useAppSelector } from '@/hooks/store'
import { Main } from './Main'
import { SelectQuiz } from './SelectQuiz'
export function Home (): JSX.Element {
  const { quizzes } = useAppSelector((state) => state.quizzes)
  return (
    <>
      <Header />
      <Main>
        <div className=''>
          <h1 className='w-72 md:w-[444px] lg:w-[465px] text-[40px] md:text-[64px] text-darkNavy dark:text-white text-wrap font-light'>Welcome to the <span className='font-medium'>Frontend Quiz!</span></h1>
          <p className='text-lg md:text-xl text-greyNavy italic dark:text-lightBluish mt-4 lg:mt-12'>Pick a subject to get started.</p>
        </div>
        <div className='mt-10 lg:m-0 md:mt-16 flex gap-3 md:gap-6 flex-col'>
          {
          quizzes?.map((quiz) => {
            const { title, icon, color } = quiz
            return <SelectQuiz key={quiz.title} title={title} img={icon} color={color} />
          })
        }
        </div>
      </Main>
    </>
  )
}
