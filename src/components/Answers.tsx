import { useAppSelector } from '@/hooks/store'
import { SelectAnswer } from './SelectAnswer'
import { useEffect, useState } from 'react'
import { Error } from '@/assets/icons/Error'
import { useQuizzesActions } from '@/hooks/useQuizzes'
import { IQuestion } from '@/types/types'

export function Answers (): JSX.Element {
  const { quiz, indexQuestion, userAnswer, isAnswerCorrect } = useAppSelector((state) => state.quizzes)
  const { setIsAnswerCorrect, setCountAnswerCorrect, setIndexQuestion, setUserAnswer, setQuizIsCompleted } = useQuizzesActions()
  const [options, setOptions] = useState<string[]>()
  const [correctAnswer, setCorrectAnswer] = useState<string>('')
  const [isEmptyAnswer, setIsEmptyAnswer] = useState(false)
  const [question, setQuestion] = useState<IQuestion[]>([])
  useEffect(() => {
    if (quiz !== null) {
      const { questions } = quiz
      setQuestion(questions)
      setOptions(questions[indexQuestion].options)
      setCorrectAnswer(questions[indexQuestion].answer)
    }
  }, [quiz, indexQuestion])

  const handleSubmitAnswer = (): void => {
    if (userAnswer === '') {
      setIsEmptyAnswer(true)
    } else if (userAnswer === correctAnswer) {
      setIsAnswerCorrect(true)
      setIsEmptyAnswer(false)
    } else {
      setIsAnswerCorrect(false)
      setIsEmptyAnswer(false)
    }
  }

  const handleNextQuestion = (): void => {
    if (isAnswerCorrect === true) {
      setCountAnswerCorrect()
    }
    setIsEmptyAnswer(false)
    setIsAnswerCorrect(undefined)
    setIndexQuestion()
    setUserAnswer('')
    console.log(indexQuestion, question.length)
    if (indexQuestion >= question.length - 1) {
      setQuizIsCompleted()
    }
  }

  return (
    <div className='flex flex-col gap-6'>

      {
          options?.map((option, index) => (
            <SelectAnswer isAnswerCorrect={isAnswerCorrect} correctAnswer={correctAnswer} key={option} option={option} number={index} />
          ))
        }
      {
        isAnswerCorrect === undefined &&
          <button onClick={handleSubmitAnswer} className='w-full h-[92px] rounded-3xl bg-purpol hover:opacity-50 transition-opacity text-[28px] text-white font-rubik font-medium'>Submit Answer</button>

      }
      {
        isAnswerCorrect !== undefined &&
          <button onClick={handleNextQuestion} className='w-full h-[92px] rounded-3xl bg-purpol hover:opacity-50 transition-opacity text-[28px] text-white font-rubik font-medium'>Next Question</button>

      }
      {
        isEmptyAnswer
          ? <div className='flex items-center justify-center gap-2'> <Error /> <p className='text-red font-rubik text-2xl'>Please select an answer</p>  </div>
          : null
      }

    </div>
  )
}
