interface Props {
  title: string
  img: string
  color: string
}
export function SelectQuiz ({ title, img, color }: Props): JSX.Element {
  return (
    <div className='group bg-white w-[327px]  h-[64px] rounded-xl p-[18px] flex justify-between hover:cursor-pointer items-center gap-8 border-[3px] border-white hover:border-purpol transition-colors'>
      <picture className={`size-10 rounded-lg grid place-items-center bg-[${color}]`}>
        <img src={img} className='size-8' />
      </picture>
      <p className='font-rubik font-medium text-lg flex-1 dark:text-white'>{title}</p>
    </div>
  )
}
