import './App.css'
import { useAppSelector } from '@/hooks/store'

import { Header } from '@/components/Header'

function App (): JSX.Element {
  const { quizzes } = useAppSelector((state) => state.quizzes)
  console.log('🚀 ~ App ~ quizzes:', quizzes)
  return (
    <>
      <Header />
    </>
  )
}

export default App
