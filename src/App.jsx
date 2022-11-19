import { useState } from 'react'
import StressTest from './pages/StressTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StressTest/>
    </div>
  )
}

export default App
