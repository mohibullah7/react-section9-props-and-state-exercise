import React, { useState } from 'react'

function Card() {
  
  let data = [
    {
      singerName:'Harsh Bogla',
      track: 'ten Bin ',
      image : 'https://images.pexels.com/photos/21568573/pexels-photo-21568573/free-photo-of-song-sparrow-in-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      fvt : false,

    },
    {
      singerName:'Harsh Totla',
      track: 'Check one ',
      image : 'https://images.pexels.com/photos/21568573/pexels-photo-21568573/free-photo-of-song-sparrow-in-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      fvt : false,

    },
    {
      singerName:'Bogla Too',
      track: 'Fast And ',
      image : 'https://images.pexels.com/photos/5118500/pexels-photo-5118500.jpeg?auto=compress&cs=tinysrgb&w=600',
      fvt : true,

    },
    {
      singerName:'More on',
      track: 'try one  ',
      image : 'https://images.pexels.com/photos/5118491/pexels-photo-5118491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      fvt : true,

    },
  ];
  const [value,setvalue] =useState(data)
  

  
  return (
    <div>
      <div className='flex justify-center items-center gap-10 '>
        {value.map((elem,index)=>(

<div className='h-[150px] rounded-md bg-white w-[250px] p-5 relative'>
<div className='flex gap-5'>
  <div className='h-20 w-20 bg-orange-300 rounded-md'>
    <img className='cover'  src={elem.image} alt="" />
  </div>
  <div>
    <h1 className='text-lg font-bold'>{elem.singerName}</h1>
    <p>{elem.track}</p>
  </div>
</div>
  <a href="#">
  <div onClick={()=>setvalue({...value,fvt:!value.fvt})} className={`absolute h-12 w-40 ${value.fvt ? 'bg-orange-600':'bg-blue-400'} text-white rounded-full translate-x-6 translate-y-6 flex justify-center items-center`}>
  <p>{value.fvt ? 'Add To Favourite':"Removed"}</p>
</div>
  </a>

</div>



         ) ) 
      
        }
      

      </div>
    </div>
  )
}

export default Card
