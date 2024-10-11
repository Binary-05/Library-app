import React from 'react'
import { Link } from 'react-router-dom'
import libraryVideo from '/public/libvid.mp4'

const Hero = () => {
  return (
    <div className='h-[160vh]'>

      <section className="img">
        <div className="flex flex-col justify-center text-black text-center h-screen">
          <h1 className="text-[6rem] font-bold italic text-white">BookPal</h1>
          <p className='text-white font-serif text-2xl font-semibold'>Dive into a world of stories, adventures and literary magic</p>
          <button className="border-2 rounded-full p-4 py-2 mx-auto  hover:text-white bg-[#328884] hover:bg-teal-950">Explore</button>
        </div>
        <div className='w-full flex'>
          <p className='w-[50%]'>"Do you ever wonder about how an author would describe you in a novel? Not only your appearance but the way you talk and laugh and hold yourself and all the expressions on you face"</p>
          <div className="relative z-30 flex justify-center">
            <div className="w-[40%] max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
              <video src={libraryVideo} className="w-full h-full object-cover" autoPlay muted loop playsInline>Your browser does not support the video tag.</video>
            </div>

          </div>
        </div>
        {/* <div className="relative -mt-20 z-30 flex justify-center">
              <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                <video src={libraryVideo} className="w-full h-full object-cover" autoPlay muted loop playsInline>Your browser does not support the video tag.</video>
              </div>
              </div> */}
      </section>

      {/* <Link/> */}
    </div>
  )
}

export default Hero