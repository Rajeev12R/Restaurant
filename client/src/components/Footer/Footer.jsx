import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer text-[#ecfff6] mt-[100px] bg-gradient-to-br from-orange-300 to-red-400 flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 ' id='footer' >
        <div className="footer-container w-[100%] gap-20 grid grid-cols-[2fr_1fr_1fr]" >
            <div className="footer-container-left flex flex-col items-start gap-5">
            <img src={assets.logo} alt="" srcset="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus quasi obcaecati natus repellendus tempore in, maiores nam. Enim sequi, fugit ipsam laudantium nobis labore earum magnam eligendi numquam necessitatibus!</p>
            <div className="footer-social-icons flex">
                <a href="http://fackbook.com" target="_blank" rel="noopener noreferrer"><img className='w-10 mr-[15px] cursor-pointer  hover:bg-gradient-to-br from-yellow-200 to-red-300 rounded-full' src={assets.facebook_icon} alt="" /></a>
                <a href="http://linkedin.in" target="_blank" rel="noopener noreferrer"><img className='w-10 mr-[15px] cursor-pointer  hover:bg-gradient-to-br from-yellow-200 to-red-300 rounded-full' src={assets.linkedin_icon} alt="" /></a>
                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><img className='w-10 mr-[15px] cursor-pointer  hover:bg-gradient-to-br from-yellow-200 to-red-300 rounded-full' src={assets.twitter_icon} alt="" /></a>
            </div>
            </div>
            <div className="footer-container-center flex flex-col items-start gap-5">
            <h2>Tomato</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className="footer-container-right flex flex-col items-start gap-5">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-836-042-6936</li>
                    <li>rjranjan2112@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-[100%] h-[2px] my-[20px] bg-[#eafbe4] border-none'/>
        <p className='footercopyright'>Copyright 2024 © Tomato.com -All Rights Reserved.</p>
    </div>
  )
}

export default Footer