// import { Link } from "react-router-dom"; 

import { Link, NavLink } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { LuMail } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";


const Navbar = () => {
    return (
        <div>

            <div className='flex bg-[#bc55108a] gap-10 justify-center text-white h-12 pt-2'>
               <Link to='#' className="flex gap-2"><LuPhone className="mt-1"/> +233 273 608 4887</Link>
               <Link to='#' className="flex gap-2 "><LuMail className="mt-1"/>info@gmail.com</Link>
                <h4 className="flex gap-2"><FaRegClock className="mt-1" /> Monday - Fri: 9 am - 6 pm</h4>
                <Link to='#' className="flex gap-2"><LuMessagesSquare className="mt-1" />Live Chat</Link>
                <Link to='#' className="flex gap-2"><VscAccount className="mt-1"/> Login</Link>
            </div>

            <nav className=" fixed flex gap-52 text-white bg-[#bc55108a] left-0 right-0 h-12 pt-2">
                <h1 className=" flex text-2xl pl-10 gap-2"><BsBook className="mt-2"/> Bookle</h1>
                <NavLink to='/' className='hover:underline hover:text-rose-600' >Home</NavLink>
                <NavLink to='/add-new' className='hover:underline hover:text-rose-600' >Add Book</NavLink>
                <NavLink to='/books/:id' className='hover:underline hover:text-rose-600 '>Book ID </NavLink>
                <NavLink to='#' >Sign Up</NavLink>
            </nav>
        </div>
    )
};

export default Navbar;