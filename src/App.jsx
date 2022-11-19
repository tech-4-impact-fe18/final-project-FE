import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ResultBerat from './components/ResultBerat'
import ResultRingan from './components/ResultRingan'
import ResultSedang from './components/ResultSedang'
import StressTest from './pages/StressTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StressTest/>
      <BrowserRouter>
        <Routes>
          <Route path='/result1' element={<ResultRingan/>} />
          <Route path='/result2' element={<ResultSedang/>} />
          <Route path='/result3' element={<ResultBerat/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
