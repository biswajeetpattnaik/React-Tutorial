import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let usersData={
    name:"Biswjeet",
    age:25
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">
      Hello world!
      </h1>
      <Card users={usersData}/>
      <Card users={usersData}/>
    </>
  )
}

export default App
