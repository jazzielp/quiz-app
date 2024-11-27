import { LETTERS } from '@/consts/consts'
import { Correct } from '@/assets/icons/Correct'
import { useState } from 'react'
import { Error } from '@/assets/icons/Error'
interface Params {
  answer: string
  option: string
  number: number
  selected: boolean
}

export function SelectAnswer ({ answer, option, number, selected }: Params): JSX.Element {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(false)
  const letter = LETTERS[number]
  let spanStyle = 'bg-lightGrey text-greyNavy'
  let divStyle = 'border-white'
  if (isAnswerCorrect !== null && isAnswerCorrect) {
    spanStyle = 'bg-green text-white'
    divStyle = 'border-green'
  } else if (isAnswerCorrect !== null && !isAnswerCorrect) {
    spanStyle = 'bg-red text-white'
    divStyle = 'border-red'
  } else if (selected) {
    spanStyle = 'bg-purpol text-white'
    divStyle = 'border-purpol'
  }
  return (
    <div className={`group w-[528px] h-[92px] rounded-3xl p-[18px] flex justify-between hover:cursor-pointer items-center gap-8 border-[3px] ${divStyle}`}>
      <span className={`size-14 flex justify-center items-center rounded-lg ${selected ? '' : 'group-hover:bg-[#F6E7FF] transition-colors group-hover:text-purpol'} font-medium font-rubik text-[28px] ${spanStyle}`}>
        {letter}
      </span>
      <p className='font-rubik font-medium text-[28px] flex-1'>{option}</p>
      {
        isAnswerCorrect === null
          ? null
          : isAnswerCorrect ? <Correct /> : <Error />
      }
    </div>
  )
}
