import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { BASE_URL } from "../../constants";


const AddBook = () => {

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //collect form data
      const formData = new FormData(event.target);
      //post data to api
      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get('title'),
        cover: formData.get('cover'),
        author: formData.get('author'),
        year: formData.get('year'),
        genre: formData.get('genre'),
        description: formData.get('description'),
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="bg-[#9f440709]">
      <Navbar />
      <div className="mt-20 ">
        <p className="font-bold italic text-3xl text-center ">Read with BookPal</p>

        <div className="border border-[#9F4307] shadow-2xl rounded-xl h-5/6 w-2/5 ml-96 pb-10">

          <form onSubmit={handleSubmit} className="flex flex-col text-center place-items-center bg-white">

            <input type="image" src="" alt="" className="border border-[#9F4307] h-36 w-64 rounded-3xl mb-3 mt-2" />

            <label name="title" id="title">Title</label>
            <input type="text" required className="border border-[#9F4307] w-64 rounded-3xl mb-3 p-1" />


            <label>Author</label>
            <select name="author" id="authors" className="border border-[#9f4407] w-64 rounded-3xl mb-3 p-1">
              <option value="#">-select-</option>
              <option value="#">Coleen Hover</option>
              <option value="#">Gabriel Bellany</option>
            </select>

            <label name="genre" id="genre">Genre</label>
            <select name="genre" id="genre" className="border border-[#9F4307] w-64 rounded-3xl mb-3 p-1" >
              <option value="#">-select-</option>
              <option value="#">Politics</option>
              <option value="#">Poetry</option>
              <option value="#">Novels</option>
              <option value="#">History</option>
            </select>

            <label name="year" id="year">Year</label>
            <input type="date" className="border border-[#9F4307] w-64 rounded-3xl mb-3 p-1" />

            <label name="description" id="description">Description</label>
            <input type="text" className="border border-[#9F4307] h-28 w-64 rounded-3xl mb-3 p-1" />



            <button className="bg-[#9F4307] text-white rounded-full w-24 h-10 ">Submit</button>
          </form>

        </div>

      </div>
      <Footer />
    </div>

  )
};

export default AddBook;