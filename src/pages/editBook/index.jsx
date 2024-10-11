import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants';

const EditBook = () => {
  const { id } = useParams()
  const [book, setBook] = useState({
    title: "",
    author: { author: "" },
    genre: "",
    year: ""
  });

  const fetchBook = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/books/${id}`);
      console.log(res.data);
      setBook(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBook();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the field is the author's name, we need to update the nested author object
    if (name === 'author') {
      setBook((prevBook) => ({
        ...prevBook,
        author: { author: value }
      }));
    } else {
      setBook((prevBook) => ({
        ...prevBook,
        [name]: value
      }));
    }
  }

  const handleEditBook = async () => {
    try {
      const res = await axios.patch(`${BASE_URL}/edit-book/${id}`, book);
      console.log(res)
    } catch (error) {
      console.log("Error editing book", error)
    }
  }

  return (
    <div className="bg-[url('./assets/images/edbg.jpg')] bg-contain">
      <Navbar />
      <div className='h-[80vh]'>
        <p className="font-bold italic text-3xl text-center pt-12">Edit Book</p>
        <div>
          <form onSubmit={handleEditBook} className="flex flex-col text-center place-items-center backdrop-filter backdrop-blur-lg rounded-xl h-5/6 w-2/5 ml-96 pb-10">
            <label className="text-black">Title</label>
            <input type="text" name="title" onChange={handleChange} value={book?.title} className="border border-[#9F4307] w-64 rounded-3xl mb-3 mt-2 p-1" required />

            <label className="text-black">Author</label>
            <input type="text" name="author" onChange={handleChange} value={book?.author?.author} className="border border-[#9f4407] w-64 rounded-3xl mb-3 p-1" required />

            <label className="text-black">Genre</label>
            <input type="text" name="genre" onChange={handleChange} value={book?.genre} className="border border-[#9F4307] w-64 rounded-3xl mb-3 p-1" required />

            <label className="text-black">Year</label>
            <input type="date" name="year" onChange={handleChange} value={book?.year} id="year" className="border border-[#9F4307] w-64 rounded-3xl mb-3 p-1" required />

            <button onClick={handleEditBook} className="bg-[#9F4307] text-black rounded-full w-24 h-10">Edit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EditBook;
