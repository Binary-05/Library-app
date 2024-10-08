// import { Link } from "react-router-dom"; 

import { Link, NavLink } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { LuMail } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";

const Navbar = () => {
    return (
        <div>

            <div className='flex bg-[#bc55108a] gap-10 justify-center text-white'>
               <Link to='#'>+233 273 608 4887</Link>
               <Link to='#' className="flex"><LuMail />info@gmail.com</Link>
                <h4> Monday - Fri: 9 am - 6 pm</h4>
                <Link to='#' className="flex"><LuMessagesSquare />Live Chat</Link>
                <Link to='#' className="flex"> <VscAccount /> Login</Link>
            </div>

            <nav className=" fixed flex gap-52 text-white bg-[#bc55108a] left-0 right-0">
                <h1 className=" flex text-2xl pl-10"><BsBook /> Bookle</h1>
                <NavLink to='/' className='hover:underline hover:text-rose-600' >Home</NavLink>
                <NavLink to='/add-new' className='hover:underline hover:text-rose-600' >Add Book</NavLink>
                <NavLink to='/books/:id' className='hover:underline hover:text-rose-600 '>Book ID </NavLink>
                <NavLink to='#' className='border border-white rounded'>Sign Up</NavLink>
            </nav>
        </div>
    )
};

export default Navbar;