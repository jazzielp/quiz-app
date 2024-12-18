import { useAppSelector } from '@/hooks/store'
import { SelectAnswer } from './SelectAnswer'
import { useEffect, useState } from 'react'
import { Error } from '@/assets/icons/Error'
import { useQuizzesActions } from '@/hooks/useQuizzes'

export function Answers (): JSX.Element {
  const { quiz, indexQuestion, userAnswer, isAnswerCorrect } = useAppSelector((state) => state.quizzes)
  const { setIsAnswerCorrect } = useQuizzesActions()
  const [options, setOptions] = useState<string[]>()
  const [correctAnswer, setCorrectAnswer] = useState<string>('')
  const [isEmptyAnswer, setIsEmptyAnswer] = useState(false)
  useEffect(() => {
    if (quiz !== null) {
      const { questions } = quiz
      setOptions(questions[indexQuestion].options)
      setCorrectAnswer(questions[indexQuestion].answer)
    }
  }, [quiz])

  const handleButtonClick = (): void => {
    if (userAnswer === '') {
      setIsEmptyAnswer(true)
    } else if (userAnswer === correctAnswer) {
      setIsAnswerCorrect(true)
    } else {
      setIsAnswerCorrect(false)
    }
  }

  return (
    <div className='flex flex-col gap-6'>

      {
          options?.map((option, index) => (
            <SelectAnswer isAnswerCorrect={isAnswerCorrect} correctAnswer={correctAnswer} key={option} option={option} number={index} selected={false} />
          ))
        }
      <button onClick={handleButtonClick} className='w-full h-[92px] rounded-3xl bg-purpol hover:opacity-50 transition-opacity text-[28px] text-white font-rubik font-medium'>Submit Answer</button>
      {
        isEmptyAnswer
          ? <div className='flex items-center justify-center gap-2'> <Error /> <p className='text-red font-rubik text-2xl'>Please select an answer</p>  </div>
          : null
      }

    </div>
  )
}
