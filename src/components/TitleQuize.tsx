import { BG_COLOR_QUIZZES } from '@/consts/consts'

interface Props {
  quiz?: string
  img?: string
}

export function TitleQuize ({ quiz, img }: Props): JSX.Element {
  const bgColor = BG_COLOR_QUIZZES[quiz as keyof typeof BG_COLOR_QUIZZES]
  return (
    <div className='flex items-center gap-4 md:gap-6 dark:text-white'>
      <picture className={`size-10 md:size-14 rounded-lg grid place-items-center ${bgColor}`}>
        <img src={img} className='size-7 md:size-10' />
      </picture>
      <p className='font-rubik text-darkNavy dark:text-white font-medium text-lg md:text-[28px] flex-1'>{quiz}</p>
    </div>
  )
}
