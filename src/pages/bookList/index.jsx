import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BsArrowRight } from "react-icons/bs";
import K from "./components/constant";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { LiaCommentDots } from "react-icons/lia";
import { MdOutlineStarRate } from "react-icons/md";

const BookList = () => {

  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const response = await axios.get(`${BASE_URL}/books`);
    setBooks(response.data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  const handleEdit = (bookId) => {
    navigate(`/edit/${bookId}`);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/books/${id}`)
      console.log(res)
    } catch (error) {
      console.log("ERror deleting book", error)
    }
  }

  return (
    <div>
      <Navbar />
      {/* <Link to='/add-new'> Add Book</Link> */}
      {/* <button>Add Book</button> */}
      <Hero />
      <p className="text-[3rem] flex font-serif font-bold justify-center pb-7 text-amber-900">BOOKLIST</p>
      <p className="pl-14 underline text-[19px] font-serif text-amber-800">Personally Recommended</p>
      <div className="grid grid-cols-4 p-10 pt-2 gap-4">

        {
          books.map((book, index) => {
            return (
              <div key={index} className="flex flex-col w-full items-center shadow-lg m-6 gap-4 hover:shadow-2xl transition-shadow">
                <img src={book.cover} alt="img" className="h-[300px] " />
                <Link to={`/books/${book._id}`} className="font-bold text-lg">{book.title}</Link>
                <div className="flex">
                  <div className="flex pr-20">
                    <span className="pt-0.5"><MdOutlineStarRate /></span>
                    <span className="text-[12px] text-orange-600 font-semibold pt-0.5">5.0/ <span className="text-green-600 font-semibold">5.0</span></span>
                    <span className="pl-4 pt-1"><LiaCommentDots /></span>
                    <span className="text-[13px] font-sans underline">0 comments</span>
                  </div>
                  <p className="pr-2"><MdFavoriteBorder /></p>
                  <Link to={`/edit-book/${book._id}`} className="pr-2">
                    <BiEditAlt /></Link>
                  <button onClick={() => handleDelete(book._id)}><MdDeleteOutline />
                  </button>
                </div>


              </div>)
          })
        }

      </div>
      <button className="flex pt-7 text-amber-900 underline w-[100%] justify-end p-4">See More <span className="pt-1.5 pl-1"><BsArrowRight /></span></button>
      <Footer />
    </div>
  )
};

export default BookList;