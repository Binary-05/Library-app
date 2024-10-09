import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


const BookDetails = () => {
  return (
    <div>
      <Navbar />
      BookDetails
      <div className="justify-center pl-72">
        <div className=" border border-[#9F4307] rounded-xl h-[40rem] w-[40rem] shadow-2xl shadow-slate-500 pl-32 pt-10">
          <div className="border shadow-slate-400 h-72 w-96 rounded mb-3">img</div>



          <div className="border shadow-slate-400 h-72 w-96 rounded">
            <span>avatar</span>
            <div>Author</div>
            <div>Reviews</div>
            <div>Description</div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
};

export default BookDetails;