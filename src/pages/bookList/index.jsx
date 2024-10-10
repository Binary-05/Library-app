import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BsArrowRight } from "react-icons/bs";
import K from "./components/constant";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";

const BookList = () => {
  
  const [books, setBooks] = useState ([]);
  const getBooks = async () => {
    const response = await axios.get(`${BASE_URL}/books`);
    setBooks (response.data);
  }

  useEffect(()=>{
    getBooks();
  },[]);
  
  
  
  return (
    <div>
        <Navbar/>
        {/* <Link to='/add-new'> Add Book</Link> */}
        {/* <button>Add Book</button> */}
        <Hero/>
        <div className="grid grid-cols-5 p-10 pt-28">
          {
            books.map((book, index) => {
              return (
              <div key={index} className="flex flex-col w-full items-center">
                <img src={book.cover} alt="img" className="h-[300px] " />
                <Link to={`/books/${book._id}`}>{book.title}</Link>
               
                
              </div>)
            })
          }
          
        </div>
        <button className="flex pt-7 text-amber-900 underline w-[100%] justify-end p-4">See More <span className="pt-1.5 pl-1"><BsArrowRight /></span></button>
        <Footer/>
    </div>
  )
};

export default BookList;