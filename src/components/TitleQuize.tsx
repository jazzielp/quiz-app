interface Props {
  quiz?: string
  img?: string
}

export function TitleQuize ({ quiz, img }: Props): JSX.Element {
  return (
    <div>
      <img src={img} className='' />
      <p className='font-rubik font-medium text-[28px] flex-1'>{quiz}</p>
    </div>
  )
}
