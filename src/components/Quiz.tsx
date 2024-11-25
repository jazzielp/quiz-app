import { Header } from './Header'
import { Main } from './Main'
import { Question } from './Question'

export function Quiz (): JSX.Element {
  return (
    <>
      <Header />
      <Main>
        <Question />
      </Main>
    </>
  )
}
