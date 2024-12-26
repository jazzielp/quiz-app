import './App.css'

import { Home } from '@/components/Home'
import { useAppSelector } from './hooks/store'
import { Quiz } from './components/Quiz'
import { QuizCompleted } from './components/QuizCompleted'
import { useEffect, useState } from 'react'

function App (): JSX.Element {
  const { quiz, indexQuestion, quizIsCompleted } = useAppSelector((state) => state.quizzes)
  const [totalQuestion, setTotalQuestion] = useState(0)

  useEffect(() => {
    if (quiz?.questions.length !== undefined) {
      setTotalQuestion(quiz?.questions.length)
    }
  }, [quiz, indexQuestion])
  return (
    <>
      {quizIsCompleted && <QuizCompleted />}
      {
        totalQuestion > 0 ? <Quiz /> : <Home />
      }
    </>
  )
}

export default App
