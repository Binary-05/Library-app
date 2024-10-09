import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BsArrowRight } from "react-icons/bs";
import K from "../../constants";

const BOOKLISTS = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="grid grid-cols-5 p-10 pt-28">
        {
          K.BOOKLISTS.map((book, index) => {
            return (
              <div key={index} className="flex flex-col w-full items-center">
                <img src={book.image} alt="img" className="h-[300px] " />
                <Link to={`/books/${book.id}`}>{book.title}</Link>
                <p>{book.author}</p>

              </div>)
          })
        }


      </div>
      <div className="flex  justify-end align-middle items-center pr-10">
        <button className=" text-amber-900 underline">See More </button><span className="pt-1.5 pl-1"><BsArrowRight /></span>
      </div>
      <Footer />
    </div>
  )
};

export default BOOKLISTS;