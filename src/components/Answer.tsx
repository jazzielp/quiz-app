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

export function Answer ({ answer, option, number, selected }: Params): JSX.Element {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const letter = LETTERS[number]
  let selectedResponseStyle = 'bg-lightGrey text-greyNavy'
  if (selected) {
    selectedResponseStyle = 'bg-purpol text-white'
  }

  return (
    <div className='group w-[528px] h-[92px] rounded-3xl p-[18px] flex justify-between hover:cursor-pointer items-center gap-8 border-[3px] border-purpol'>
      <span className={`size-14 flex justify-center items-center rounded-lg group-hover:bg-[#F6E7FF] transition-colors group-hover:text-purpol font-medium font-rubik text-[28px] ${selectedResponseStyle}`}>
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
