import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data.json'
import FileExplorer from './Component/FileExplorer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FileExplorer data = {data}/>
    </>
  )
}

export default App
