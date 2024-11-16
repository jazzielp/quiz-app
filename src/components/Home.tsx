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
        {
          quizzes?.map((quiz) => {
            const { title, icon, color } = quiz
            return <SelectQuiz key={quiz.title} title={title} img={icon} color={color} />
          })
        }
      </Main>
    </>
  )
}
