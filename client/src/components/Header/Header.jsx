import React from 'react';
import './Header.css';
import headerImage from '../../assets/frontend_assets/header_img.png'; // Adjust path as necessary

const Header = () => {
  return (
    <div className='header h-[34vw] my-8' style={{ background: `url(${headerImage})`, backgroundRepeat: 'no-repeat' }}>
        <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]">
            <h2 className='font-medium max-w-[20vw] text-[40px] text-white text-4xl'>Order Your Favourite Food Here</h2>
            <p className='text-white text-[1vw]'>Choose from a variety of cuisines and enjoy your meal.<br/>Order now and get 10% off on your first order.</p>
            <button className='bg-white px-6 py-2 rounded-3xl text-orange-400 hover:text-yellow-400 hover:bg-orange-50'>View Menu</button>
        </div>
    </div>
  )
}

export default Header;