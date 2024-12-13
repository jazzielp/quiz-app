import { LETTERS } from '@/consts/consts'
import { Correct } from '@/assets/icons/Correct'
import { useEffect, useState } from 'react'
import { Error } from '@/assets/icons/Error'
import { useAppSelector } from '@/hooks/store'
import { useQuizzesActions } from '@/hooks/useQuizzes'
interface Params {
  correctAnswer: string
  option: string
  number: number
  selected: boolean
  isAnswerCorrect: boolean | undefined
}

export function SelectAnswer ({ correctAnswer, option, number, selected, isAnswerCorrect }: Params): JSX.Element {
  const { userAnswer } = useAppSelector((state) => state.quizzes)
  const { setUserAnswer } = useQuizzesActions()
  const [spanStyle, setSpanStyle] = useState('')
  const [divStyle, setDivStyle] = useState('')

  const letter = LETTERS[number]

  useEffect(() => {
    if (userAnswer !== option) {
      setDivStyle('dark:border-navy border-white')
      setSpanStyle('bg-lightGrey text-greyNavy')
    } else if (userAnswer !== '' && userAnswer === option) {
      setSpanStyle('bg-purpol text-white')
      setDivStyle('border-purpol')
    } else if (isAnswerCorrect === true && option === correctAnswer) {
      setSpanStyle('bg-green text-white')
      setDivStyle('border-green')
    }
    // else if (isAnswerCorrect !== null && !isAnswerCorrect) {
    //   spanStyle = 'bg-red text-white'
    //   divStyle = 'border-red'
    // } else if (selected) {
    //   spanStyle = 'bg-purpol text-white'
    //   divStyle = 'border-purpol'
    // }
  }, [userAnswer, option])

  const handleClickOption = (answer: string): void => {
    setUserAnswer(answer)
  }

  useEffect(() => {

  }, [isAnswerCorrect])

  return (
    <div onClick={() => handleClickOption(option)} className={`group w-[528px] bg-white rounded-3xl p-[18px] flex justify-between hover:cursor-pointer items-center gap-8 border-[3px] dark:bg-navy ${divStyle}`}>
      <span className={`size-14 flex justify-center items-center rounded-lg ${selected ? '' : 'group-hover:bg-[#F6E7FF] transition-colors group-hover:text-purpol'} font-medium font-rubik text-[28px] ${spanStyle}`}>
        {letter}
      </span>
      <p className='font-rubik leading-8 dark:text-white font-medium text-[28px] flex-1'>{option}</p>
      {isAnswerCorrect === null && null}
      {isAnswerCorrect === true && correctAnswer === option && <Correct />}
      {
        isAnswerCorrect === undefined
          ? null
          : isAnswerCorrect ? <Correct /> : <Error />
      }
    </div>
  )
}
