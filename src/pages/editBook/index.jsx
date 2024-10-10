import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const EditBook = () => {
  return (
    <div>
        <Navbar />
        <div className='h-[80vh]'>
            <p className="font-bold italic text-3xl text-center pt-12">Edit Book</p>
            <div>
                <form className="flex flex-col text-center place-items-center backdrop-filter backdrop-blur-lg rounded-xl h-5/6 w-2/5 ml-96 pb-10" >
                    <label name="title" className="text-white">Title</label>
                    <input type="text" className="border border-[#9F4307] w-64 rounded-3xl mb-3 mt-2 p-1" required/>
                    <label name="author" className="text-white">Author</label>
                    <input type="text" className="border border-[#9f4407] w-64 rounded-3xl mb-3 p-1" required/>
                    <label name="genre" className="text-white">Genre</label>
                    <input type="text" className="border border-[#9F4307] w-64 rounded-3xl mb-3 p-1" required />
                    <label name="year" className="text-white">Year</label>
                    <input type="date" name="" id="year" className="border border-[#9F4307] w-64 rounded-3xl mb-3 p-1" />
                    <button className="bg-[#9F4307] text-white rounded-full w-24 h-10 ">Edit</button>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default EditBook;