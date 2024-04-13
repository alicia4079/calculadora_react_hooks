import './App.css'
import Calculator from './components/Calculator/calculator'

import { Timer } from './components/Timer/timer'
import { useCurrentDate } from './customHooks/useCurrentDate'

function App() {
  const currentDate = useCurrentDate()

  return (
    <div className='divDate'>
      <Timer date={currentDate} />
      <Calculator />
    </div>
  )
}

export default App
