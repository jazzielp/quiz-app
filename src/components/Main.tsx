import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
export function Main ({ children }: Props): JSX.Element {
  return (
    <main className='lg:flex lg:justify-between lg:items-start lg:mt-24 lg:w-[1157px] md:w-[640px] w-[375px] px-6 md:px-0 m-auto'>
      {children}
    </main>
  )
}
