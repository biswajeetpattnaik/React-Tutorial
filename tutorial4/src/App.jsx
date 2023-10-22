import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor]=useState("olive");
  
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className='flex flex-wrap kustify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
      </div>
      <div className='flex flex-wrap kustify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>Green</button>
      </div>
      <div className='flex flex-wrap kustify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"Blue"}} onClick={()=>setColor("blue")}>Blue</button>
      </div>
    </div>
    </div>
  )
}

export default App
