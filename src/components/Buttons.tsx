interface Params {
  text: string
}
export function Button ({ text }: Params): JSX.Element {
  return (
    <button className='w-[528px] h-[92px] p-8 bg-purpol rounded-3xl hover:opacity-50 text-white text-2xl font-medium '>
      {text}
    </button>
  )
}
