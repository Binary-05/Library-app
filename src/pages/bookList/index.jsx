import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BookList = () => {
  return (
    <div>
        <Navbar/>
        {/* <Link to='/add-new'> Add Book</Link> */}
        {/* <button>Add Book</button> */}
        <Hero/>
        <Footer/>
    </div>
  )
};

export default BookList;