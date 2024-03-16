import { useState } from 'react'

import './App.css'
import Posts from './app/features/Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Posts />
    </div>
  )
}

export default App
