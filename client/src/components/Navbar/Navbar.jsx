import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../assets/frontend_assets/logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";



const Navbar = () => {
  const [menu, setMenu] = useState("Home");


  return (
    <div className='navbar py-[20px] flex justify-between items-center'>
      <img className='w-[150px]' src={logo} alt="" />
      <ul className='navbar-menu flex gap-5 text-[#49557e] text-[18px] '>
        <li onClick={() => setMenu("Home")} className={menu === "Home"? "active":""}>Home</li>
        <li onClick={() => setMenu("Menu")} className={menu === "Menu"? "active":""}>Menu</li>
        <li onClick={() => setMenu("Mobile View")} className={menu === "Mobile View"? "active":""}>Mobile View</li>
        <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us"? "active":""}>Contact Us</li>
      </ul>
      <div className='right flex items-center gap-6'>
      <IoSearchOutline className='h-6 w-6'/>
      <div className='navbar-search-icon relative'>
      <CiShoppingBasket className='h-6 w-6'/>
      <div className="dot absolute min-w-[10px] min-h-[10px] bg-green-200 rounded-md top-[-8px] right-[-8px]"></div>
      </div>
      <button className='transparent text-[16px] transition duration-300 text-[#49557e] border border-green-200 hover:bg-[#f7fff2] px-7 py-3 rounded-full cursor-pointer'>Sign In</button>
    </div>
    </div>
  )
}

export default Navbar