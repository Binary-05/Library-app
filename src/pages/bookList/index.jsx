import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BsArrowRight } from "react-icons/bs";
import K from "../../constants";

const BOOKLISTS = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="grid grid-cols-3 pl-10">
          {
            K.BOOKLISTS.map((book, index) => {
              return (
              <div key={index} className="flex flex-col w-full items-center">
                <img src={book.image} alt="img" className="h-[300px] w-full" />
                <Link to={`/books/${book.id}`}>{book.title}</Link>
                <p>{book.author}</p>
                
              </div>)
            })
          }
          <button className="flex pl-[85%] pt-7 text-amber-900 font- underline">See More <span className="pt-1"><BsArrowRight /></span></button>
        </div>
        
        <Footer/>
    </div>
  )
};

export default BOOKLISTS;