import { FaAngleDoubleRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";


const Footer = () => {
  return (
    <section className=" bg-[#9F4307]  text-white">
      <div className="flex gap-28 p-20 m-7">
        <div className="flex flex-col w-[15%]">
          <p className="pb-5">Logo <span className="text-[25px] font-bold">Bookle</span></p>
          <p className="pb-5 font-semibold">Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis</p>
          <div className="flex gap-1">
            <p className="border p-2"><FaFacebookF /></p>
            <p className="border p-2"><FaTwitter /></p>
            <p className="border p-2"><FaYoutube /></p>
            <p className="border p-2"><FaLinkedinIn /></p>
          </div>
        </div>
        <div className="w-[15%]">
          <p className="text-[25px] font-bold pb-5">Customers Support</p>
          <div className="flex flex-row gap-3 pb-7 w-[30%] ml-9 ">
          <hr className="flex-1 border-2 border-orange-700" />
          </div>
          <div>
            <div className="flex gap-2 font-semibold text-[18px]">
            <span className="pt-1"><FaAngleDoubleRight /></span>
          <span className="pb-2">Store List</span>
          </div>
            <div className="flex gap-2 font-semibold text-[18px]">
            <span className="pt-1"><FaAngleDoubleRight /></span>
          <span className="pb-2">Opening Hours</span>
          </div>
            <div className="flex gap-2 font-semibold text-[18px]">
            <span className="pt-1"><FaAngleDoubleRight /></span>
          <span className="pb-2">Contact Us</span>
          </div>
            <div className="flex gap-2 font-semibold text-[18px]">
            <span className="pt-1"><FaAngleDoubleRight /></span>
          <span className="pb-2">Return Policy</span>
          </div>
          </div>
        </div>
        <div className="w-[15%]">
          <p className="text-[25px] font-bold pb-5">Categories</p>
          <div className="flex flex-row gap-3 pb-7 w-[30%] ml-10">
          <hr className="flex-1 border-2 border-orange-700" />
          
          </div>
          <div>
            <div className="flex gap-2 font-semibold text-[18px]">
            <span className="pt-1"><FaAngleDoubleRight /></span>
          <span className="pb-2">Novel Books</span>
          </div>
            <div className="flex gap-2 font-semibold text-[18px]">
            <span className="pt-1"><FaAngleDoubleRight /></span>
          <span className="pb-2">Poetry Books</span>
          </div>
            <div className="flex gap-2 font-semibold text-[18px]">
            <span className="pt-1"><FaAngleDoubleRight /></span>
          <span className="pb-2">Political Books</span>
          </div>
            <div className="flex gap-2 font-semibold text-[18px]">
            <span className="pt-1"><FaAngleDoubleRight /></span>
          <span className="pb-2">History Books</span>
          </div>
          </div>
        </div>
        <div className="w-[20%]">
          <p className="text-[25px] font-bold pb-5">Newsletter</p>
          <div className="flex flex-row gap-3 pb-7 w-[20%] ml-10">
          <hr className="flex-1 border-2 border-orange-700" />
          </div>
          <div>
          <p className="pb-6 font-semibold">Sign up to searing weekly newsletter to get the latest updates.</p>
          <div className="flex gap-2 border rounded-md p-4">
          <button>Enter Email Address </button>
          <span className="pt-1"><SiMinutemailer /></span>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;