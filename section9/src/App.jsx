
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  
  const arr= [1,2,4,5,6,3]

  const [val , setVal] = useState(arr)
 

  return (
    <>
      <div className='h-screen w-[100%] bg-zinc-300  '>
        <Navbar ></Navbar>
        {/* <Card ></Card> */}
      </div>
    </>
  )
}

export default App
