import { BG_COLOR_QUIZZES } from '@/consts/consts'
import { useAppSelector } from '@/hooks/store'

export function TitleQuize (): JSX.Element {
  const { quiz } = useAppSelector((state) => state.quizzes)
  const { title, icon } = (quiz != null) ? quiz : { title: '', icon: '' }
  const bgColor = BG_COLOR_QUIZZES[title as keyof typeof BG_COLOR_QUIZZES]
  return (
    <div className='flex items-center gap-4 md:gap-6 dark:text-white'>
      <picture className={`size-10 md:size-14 rounded-lg grid place-items-center ${bgColor}`}>
        <img src={icon} className='size-7 md:size-10' />
      </picture>
      <p className='font-rubik text-darkNavy dark:text-white font-medium text-lg md:text-[28px] flex-1'>{title}</p>
    </div>
  )
}
