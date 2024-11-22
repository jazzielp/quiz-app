import { BG_COLOR_QUIZZES } from '@/consts/consts'
import { useAppSelector } from '@/hooks/store'
import { useQuizzesActions } from '@/hooks/useQuizzes'
interface Props {
  index: number
  title: string
  img: string
}

export function SelectQuiz ({ index, title, img }: Props): JSX.Element {
  const { setQuiz } = useQuizzesActions()
  const { quizzes } = useAppSelector((state) => state.quizzes)
  const handleClick = (index: number): void => {
    setQuiz(quizzes[index])
  }
  const bgColor = BG_COLOR_QUIZZES[title as keyof typeof BG_COLOR_QUIZZES]
  return (
    <div onClick={() => handleClick(index)} className=' bg-white dark:bg-navy w-[327px] h-[64px] md:w-[640px] md:h-[80px] lg:w-[564px] lg:h[96px] rounded-xl p-[18px] flex justify-between hover:cursor-pointer items-center gap-8 border-[3px] border-white dark:border-navy hover:border-purpol dark:hover:border-purpol transition-colors'>
      <picture className={`size-10 md:size-14 rounded-lg grid place-items-center ${bgColor}`}>
        <img src={img} className='size-8 md:size-10' />
      </picture>
      <p className='font-rubik font-medium text-lg md:text-[28px] flex-1 dark:text-white'>{title}</p>
    </div>
  )
}
