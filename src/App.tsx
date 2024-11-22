import './App.css'

import { Home } from '@/components/Home'
import { useAppSelector } from './hooks/store'
import { Quiz } from './components/Quiz'

function App (): JSX.Element {
  const { quiz } = useAppSelector((state) => state.quizzes)
  console.log(quiz)
  return (
    <>
      {
        quiz !== null ? <Quiz /> : <Home />
      }
    </>
  )
}

export default App
