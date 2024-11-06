import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
export function Main ({ children }: Props): JSX.Element {
  return (
    <main>
      {children}
    </main>
  )
}
