import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>

<section className="img">
         <div className="flex flex-col justify-center text-black text-center h-screen">
            <h1 className="text-[3rem] ">Books</h1>
            <p>Dive into a world of stories, adventures and literary magic</p>
            <button className="border-2 rounded-full p-4 py-2 mx-auto border- hover:text-white bg-red-600">Explore</button>
         </div>
       </section>

        {/* <Link/> */}
    </div>
  )
}

export default Hero