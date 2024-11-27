import { useAppSelector } from '@/hooks/store'
import { useEffect, useState } from 'react'

export function Question (): JSX.Element {
  const { indexQuestion, quiz } = useAppSelector((state) => state.quizzes)
  const [progressClass, setProgressClass] = useState('porc-0')
  const [totalQuestion, setTotalQuestion] = useState(0)
  const [question, setQuestion] = useState<string>()
  useEffect(() => {
    if (quiz !== null) {
      setTotalQuestion(quiz.questions.length)
      setQuestion(quiz.questions[indexQuestion].question)
    }
  }, [quiz])
  const answeredPercentage = indexQuestion / totalQuestion

  useEffect(() => {
    if (answeredPercentage > 0 && answeredPercentage <= 0.1) {
      setProgressClass('porc-10')
    } else if (answeredPercentage > 0.1 && answeredPercentage <= 0.2) {
      setProgressClass('porc-20')
    } else if (answeredPercentage > 0.2 && answeredPercentage <= 0.3) {
      setProgressClass('porc-30')
    } else if (answeredPercentage > 0.3 && answeredPercentage <= 0.4) {
      setProgressClass('porc-40')
    } else if (answeredPercentage > 0.4 && answeredPercentage <= 0.5) {
      setProgressClass('porc-50')
    } else if (answeredPercentage > 0.5 && answeredPercentage <= 0.6) {
      setProgressClass('porc-60')
    } else if (answeredPercentage > 0.6 && answeredPercentage <= 0.7) {
      setProgressClass('porc-70')
    } else if (answeredPercentage > 0.7 && answeredPercentage <= 0.8) {
      setProgressClass('porc-80')
    } else if (answeredPercentage > 0.8 && answeredPercentage <= 0.9) {
      setProgressClass('porc-90')
    } else if (answeredPercentage > 0.9 && answeredPercentage <= 1) {
      setProgressClass('porc-20')
    }
  }, [answeredPercentage])

  return (
    <div className=''>
      <p className='text-xl mb-7 font-rubik italic text-greyNavy'>{`Question ${(indexQuestion + 1)} of ${totalQuestion}`}</p>
      <h2 className='text-4xl mb-44 font-medium font-rubik text-darkNavy dark:text-white'>{question}</h2>
      <div className='w-full h-4 bg-white rounded-full'>
        <div className={`h-full ${progressClass} bg-purpol rounded-full`} />
      </div>
    </div>
  )
}
