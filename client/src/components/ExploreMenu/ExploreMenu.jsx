import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu flex gap-5 flex-col' id='explore-menu'>
        <h1 className='text-[#262626] font-medium '>Explore Menu</h1>
        <p className='explore-menu-text max-w-[60%] color-[#808080]'>Choose delicious food from our menu. We have a variety of dishes to satisfy your cravings. </p>
        <div className='explore-menu-list flex items-center justify-between gap-7 my-5 overflow-x-scroll'>
            {menu_list.map((item, index)=>{
                return (
                    <div key={index} onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item items-center justify-center flex flex-col ">
                        <img src={item.menu_image} alt="" className={` ${category===item.menu_name?"active":""} w-[7.5vw] min-w-[80px rounded-full] duration-2000 cursor-pointer`} />
                        <p className='mt-3 text-[#747474] cursor-pointer text-md'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div> <hr className='my-[10px] bg-[#fbebe4] h-[4px] border-none'/>
    </div>
  )
}

export default ExploreMenu