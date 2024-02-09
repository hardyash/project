import React from 'react'
import { BsPersonCircle, BsSearch, BsJustify}
from 'react-icons/bs';
import { FaRegBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

// document.addEventListener("DOMContentLoaded", function() {
//     const menuIcon = document.querySelector(".menu-icons");
//     const body = document.querySelector("body");
  
//     menuIcon.addEventListener("click", function() {
//       body.classList.toggle("show-sidebar");
//     });
//   });
function Header(OpenSidebar) {
  return (
   
    
    <header className="header">
        <div className="menu-icons">
             <BsJustify className='icon' onClick={OpenSidebar} />
             {/* <i class="fas fa-bars" ></i> */}
        </div>

        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>

        <div className='header-right'>
            <FaRegBell  className='icon'/>
            <AiOutlineMessage  className='icon'/>
            <BsPersonCircle className='icon'/> Admirra John <IoIosArrowDown /> 
        </div>

    </header>
    
  )
}

export default Header
