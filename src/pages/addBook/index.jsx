import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";


const AddBook = () => {
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    const response = await axios.get(`${BASE_URL}/authors`);
    setAuthors(response.data)
  }

  useEffect(() => {
    getAuthors();
  }, []);

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
        content: formData.get('content'),
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="bg-[url('./assets/images/books-5433432_1280.jpg')] bg-cover">
      <Navbar />
      <div className="mt-20 ">
        <p className="font-bold italic text-3xl text-center pb-5 ">Read with BookPal</p>

        <div className="border border-[#9F4307] shadow-2xl rounded-xl h-5/6 w-2/5 ml-96 pb-10">

          <form onSubmit={handleSubmit} className="flex flex-col text-center place-items-center backdrop-filter backdrop-blur-lg pt-3"  >

            <label className="text-white" > Enter Image Url</label>
            <input type="url" name="cover" id="url" required className="border border-[#9F4307] w-64 rounded-3xl mb-3 p-1" />


            <label id="title" className="text-white">Title</label>
            <input name="title" type="text" required className="border border-[#9F4307] w-64 rounded-3xl mb-3 p-1" />


            <label name="author" id="author" className="text-white">Author</label>
            <select name="author" id="authors" className="border border-[#9f4407] w-64 rounded-3xl mb-3 p-1" required >
             {authors.map((author) => {
              return <option key={author._id} value={author._id}>{author.author}</option>
             })}
            </select>

            <label name="genre" id="genre" className="text-white" >Genre</label>
            <select name="genre" id="genre" className="border border-[#9F4307] w-64 rounded-3xl mb-3 p-1" required >
              <option value="#">-select-</option>
              <option value="#">Politics</option>
              <option value="#">Poetry</option>
              <option value="#">Novels</option>
              <option value="#">History</option>
            </select>

            <label id="year" className="text-white">Year</label>
            <input name="year" type="number" className="border border-[#9F4307] w-64 rounded-3xl mb-3 p-1" required />

            <label id="description" className="text-white" >Description</label>
            <input name="description" type="text" className="border border-[#9F4307] h-20 w-64 rounded-3xl mb-3 p-1" required />

            <label id="content" className="text-white">Content</label>
            <input name="content" type="text" className="border border-[#9F4307] h-28 w-64 rounded-3xl mb-3 p-1" />



            <button className="bg-[#9F4307] text-white rounded-full w-24 h-10 " type="submit">Submit</button>
          </form>
 
        </div>

      </div>
      <Footer />
    </div>

  )
};

export default AddBook;