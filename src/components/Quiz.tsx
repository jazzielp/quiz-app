interface Props {
  quiz: string
  img?: string
}
export function Quiz ({ quiz, img }: Props): JSX.Element {
  return (
    <div className='group w-[528px] h-[92px] rounded-3xl p-[18px] flex justify-between hover:cursor-pointer items-center gap-8 border-[3px] border-white hover:border-purpol transition-colors'>
      <img src={img} className='' />
      <p className='font-rubik font-medium text-[28px] flex-1'>{quiz}</p>
    </div>
  )
}
