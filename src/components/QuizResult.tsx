import { useEffect, useState } from 'react'
import { TitleQuize } from './TitleQuize'
import { useAppSelector } from '@/hooks/store'
export function QuizResult (): JSX.Element {
  const { countAnswerCorrect, quiz } = useAppSelector((state) => state.quizzes)
  const [totalQuestion, setTotalQuestion] = useState(0)

  useEffect(() => {
    if (quiz?.questions.length !== undefined) {
      setTotalQuestion(quiz?.questions.length)
    }
  }, [quiz])
  return (
    <div className='flex flex-col items-center gap-10 mb-8 bg-white dark:bg-navy rounded-3xl p-12'>
      <TitleQuize />
      <h2 className='text-[144px] font-medium font-rubik text-darkNavy dark:text-white '>
        {countAnswerCorrect}
      </h2>
      <p className='text-2xl text-greyNavy dark:text-lightBluish'>out of {totalQuestion}</p>
    </div>
  )
}
