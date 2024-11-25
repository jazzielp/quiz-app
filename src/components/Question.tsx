import { useAppSelector } from '@/hooks/store'
import { useState } from 'react'

export function Question (): JSX.Element {
  const { indexQuestion, quiz } = useAppSelector((state) => state.quizzes)
  const [progressClass, setProgressClass] = useState('porc-0')
  let totalQuestion = 0
  let question
  if (quiz !== null) {
    question = quiz.questions
    totalQuestion = question.length
  }

  const answeredPrecentage = indexQuestion / totalQuestion
  if (answeredPrecentage > 0 && answeredPrecentage <= 0.1) {
    setProgressClass('porc-10')
  } else if (answeredPrecentage > 0.1 && answeredPrecentage <= 0.2) {
    setProgressClass('porc-20')
  } else if (answeredPrecentage > 0.2 && answeredPrecentage <= 0.3) {
    setProgressClass('porc-30')
  } else if (answeredPrecentage > 0.3 && answeredPrecentage <= 0.4) {
    setProgressClass('porc-40')
  } else if (answeredPrecentage > 0.4 && answeredPrecentage <= 0.5) {
    setProgressClass('porc-50')
  } else if (answeredPrecentage > 0.5 && answeredPrecentage <= 0.6) {
    setProgressClass('porc-60')
  } else if (answeredPrecentage > 0.6 && answeredPrecentage <= 0.7) {
    setProgressClass('porc-70')
  } else if (answeredPrecentage > 0.7 && answeredPrecentage <= 0.8) {
    setProgressClass('porc-80')
  } else if (answeredPrecentage > 0.8 && answeredPrecentage <= 0.9) {
    setProgressClass('porc-90')
  } else if (answeredPrecentage > 0.9 && answeredPrecentage <= 1) {
    setProgressClass('porc-20')
  }

  return (
    <div className=''>
      <p className='text-xl mb-7 font-rubik italic text-greyNavy'>{`Question ${(indexQuestion + 1)} of ${totalQuestion}`}</p>
      <h2 className='text-4xl mb-44 font-medium font-rubik text-darkNavy dark:text-white'>Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?</h2>
      <div className='w-full h-4 bg-white rounded-full'>
        <div className={`h-full ${progressClass} bg-purpol rounded-full`} />
      </div>
    </div>
  )
}
