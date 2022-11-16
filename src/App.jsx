import { useState } from 'react'
import FormInput from './components/FormInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormInput />
    </div>
  )
}

export default App
