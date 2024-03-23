import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3 className='bg-green-400 text-black p-5 rounded-xl mb-5'>First Time Tailwind</h3>
    <Card username="Ailce Jones" btntext="click me"/>
    <Card username="Zakta Kines"/>
    </>
  )
}

export default App
