import './App.css'
import { useState } from 'react'
import quizzesData from './db/data.json'
import { IQuiz } from './types/types'
import { Answer } from '@/components/Answer'
import { Button } from '@/components/Buttons'
import { Quiz } from '@/components/Quiz'
console.log(quizzesData)
function App (): JSX.Element {
  const [quizzes] = useState<IQuiz[]>(quizzesData.quizzes)
  console.log('🚀 ~ App ~ quizzes:', quizzes[0])

  return (
    <>
      <h1>Hello world</h1>
      <p className='font-rubik'>alsdkasdlasdkaslkdlasd</p>
      <Button text='Button Idle' />
      <Answer answer='cc' option='cc' number={1} selected />
      <Quiz quiz='html' img={quizzes[0].icon} />
    </>
  )
}

export default App
