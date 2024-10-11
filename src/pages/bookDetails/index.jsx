import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";


const BookDetails = () => {
  const params = useParams()
  console.log(params)

  const BookId = params.id


  // declare state to store the todos
  const [bookDetail, setBookDetail] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`${BASE_URL}/books/${BookId}`)
      setBookDetail(response.data)
      console.log(bookDetail)
    };
    fetchBook();
  }, []);



  return (
    <div className="bg-[url('./assets/images/book-2020460_1280.jpg')] bg-contain" >
      <Navbar />

      <div className="justify-center pl-72 pt-16 ">
        <div className=" border border-[#9F4307] rounded-xl h-fit w-[40rem] shadow-2xl shadow-slate-500 pl-32 pt-10 backdrop-filter backdrop-blur-lg">
          <div className="border border-[#9F4307] shadow-slate-400 h-5/6 w-44 rounded mb-3">
            <img src={bookDetail.cover} alt="" />
          </div>



          <div className="border border-[#9F4307] shadow-slate-400 h-72 w-96 rounded">
            <span>{bookDetail.title}</span>
            <div>{bookDetail.author}</div>
            {/* <div>Reviews</div> */}
            <div>{bookDetail.description}</div>
          </div>
          <Link to="#">Read</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default BookDetails;