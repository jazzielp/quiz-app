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
  console.log(quizIsCompleted)

  if (quizIsCompleted) {
    return <QuizCompleted />
  }

  if (quiz !== null && totalQuestion > 0) {
    return <Quiz />
  }

  return <Home />
}

export default App
