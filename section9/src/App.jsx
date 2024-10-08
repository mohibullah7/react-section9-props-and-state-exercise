
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  
  let data = [1,2,3,4,5,6,7,8]
  const [val,setval]= useState(data)
  
 

  return (
    <>
      <div className='h-screen w-[100%] bg-zinc-300  '>
        <Navbar ></Navbar>
        {
         val.map((item)=>{
        return  <h1>{item}</h1>
})
        }

        <button onClick={()=>(s)}
         className='px-2 py-1 bg-blue-400'>CLick</button>

       
       
        {/* <Card ></Card> */}

      </div>
    </>
  )
}

export default App
