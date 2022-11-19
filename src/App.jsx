import { useState } from 'react'
import ResultBerat from './components/ResultBerat'
import ResultRingan from './components/ResultRingan'
import ResultSedang from './components/ResultSedang'
import StressTest from './pages/StressTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <StressTest/> */}
      <ResultRingan/>
      <ResultSedang/>
      <ResultBerat/>
    </div>
  )
}

export default App
