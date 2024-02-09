import React from 'react'
import logo from "./assets/logo.png"
import 
{BsCart3, BsGrid1X2Fill} from 'react-icons/bs'
 import { VscAccount } from "react-icons/vsc";
 import { AiOutlineSchedule } from "react-icons/ai";
 import { MdPeople } from "react-icons/md";
 import { LuBuilding2 } from "react-icons/lu";
 import { BiSupport } from "react-icons/bi";
 import { CiSettings } from "react-icons/ci";

function Sidebar({openSidebarToggle,OpenSidebar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" :""}>
    <div className='sidebar-title'>
        <div className="sidebar-brand">
        <img className='logo' src={logo} alt="logo" /> Vasitum
        </div>

        <span className='icon close_icon' onClick={OpenSidebar}> XX</span>
        </div>

        <ul className="sidebar-list">
        <h2>Main-menu</h2>
            <li className="sidebar-list-items">
                
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>               
            </li>
           
            <li className="sidebar-list-items">
                <a href="">
                    < VscAccount className='icon'/> Recruitment
                </a>               
            </li>
           
            <li className="sidebar-list-items">
                <a href="">
                    <AiOutlineSchedule className='icon'/> Schedule
                </a>               
            </li>
           
            <li className="sidebar-list-items">
                <a href="">
                    <MdPeople className='icon'/> Employee
                </a>               
            </li>
           
            <li className="sidebar-list-items">
                <a href="">
                    <LuBuilding2 className='icon'/> Department
                </a>               
            </li>

            <h2>Others</h2>

            <li className="sidebar-list-items">
                <a href="">
                    <BiSupport className='icon'/> Support
                </a>               
            </li>
            <li className="sidebar-list-items">
                <a href="">
                    <CiSettings className='icon'/> Setting
                </a>               
            </li>
            



        </ul>
    </aside>
  )
}

export default Sidebar
