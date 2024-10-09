import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>

<section className="img">
         <div className="flex flex-col justify-center text-black text-center h-screen">
            <h1 className="text-[6rem] font-bold italic text-white">BookPal</h1>
            <p className='text-black text-[25px] font-serif font-bold pb-3'>Dive into a world of stories, adventures and literary magic</p>
            <button className="border-2 rounded-full p-4 py-2 mx-auto hover:bg-teal-950 hover:text-white bg-[#328884] ">Explore</button>
         </div>
       </section>

        {/* <Link/> */}
    </div>
  )
}

export default Hero 