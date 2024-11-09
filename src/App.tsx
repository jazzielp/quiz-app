import './App.css'
import { useState } from 'react'
import quizzesData from './db/data.json'
import { IQuiz } from './types/types'
import { Header } from './components/Header'
console.log(quizzesData)
function App (): JSX.Element {
  const [quizzes] = useState<IQuiz[]>(quizzesData.quizzes)
  console.log('🚀 ~ App ~ quizzes:', quizzes[0])

  return (
    <>
      <Header />
    </>
  )
}

export default App
