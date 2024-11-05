import './App.css'
import { Answer } from '@/components/Answer'
import { Button } from '@/components/Buttons'

function App (): JSX.Element {
  return (
    <>
      <h1>Hello world</h1>
      <p className='font-rubik'>alsdkasdlasdkaslkdlasd</p>
      <Button text='Button Idle' />
      <Answer answer='cc' option='cc' number={1} selected={false} />
    </>
  )
}

export default App
