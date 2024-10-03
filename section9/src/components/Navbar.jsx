import React from 'react'

const Navbar = () => {
  return (
    <div>
     <div className="w-full">
      <div className="container mx-auto">
        <header>
          <nav>
            <div className='flex justify-between py-10'>
              <p className='text-[2rem] text-orange-600'>Orange</p>
              <button className='px-4 text-[1.2rem] bg-orange-600 text-white rounded-md'>Favourite 
                <span>1</span>
              </button>

            </div>
          </nav>
        </header>
      </div>
      
      </div> 
    </div>
  )
}

export default Navbar
