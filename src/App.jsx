import { useState } from 'react'
import Result from './components/Result'
import StressTest from './pages/StressTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <StressTest/> */}
      <Result/>
    </div>
  )
}

export default App
