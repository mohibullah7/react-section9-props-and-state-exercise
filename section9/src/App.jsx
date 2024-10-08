
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  
  // let data = [1,2,3,4,5,6,7,8]
  const data = [
    {name:'khan',age:80,number :'no '},
    {name:'nsam',age:32320,number :'nklo '},
    {name:'lskalsk',age:20,number :'nsao '}
  ]
  const [val,setval]= useState(data)
  
 

  return (
    <>
      <div className='h-screen w-[100%] bg-zinc-300  '>
        <Navbar ></Navbar>
       {val.map((elem,index)=>{
        
        return<div>
            <h1>{elem.name}</h1>
            <h1>{elem.age}</h1>
            <h1>{elem.number}</h1>

        </div>
        

       })}
       <button className='px-2 py-2 bg-blue-300 ' onClick={()=>setval([...val,age:410])}>
          click
       </button>
       
        {/* <Card ></Card> */}

      </div>
    </>
  )
}

export default App
