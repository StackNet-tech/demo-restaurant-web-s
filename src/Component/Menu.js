import React from 'react'
import menu from '../assests/menu/menu_bg.png';
import menuTitle from '../assests/menu/Menu Text.png';
import food1 from '../assests/menu/food1.png';

const bgMenu = {
    backgroundImage: `url(${menu})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '105vh',
}

export const Menu = () => {
  return (
    <div style={bgMenu} className='flex justify-center items-center pb-[5rem]' > 
        <div className='container pb-8 md:pb-0'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className="flex flex-col
                            justify-center gap-4 pt-1 pl-10 pr-12 ">
              <img src={menuTitle} alt="menuTitle " className="w-3/4 mt-[9rem]"></img>
              <p className='text-white ml-2'>
              At Grill & Chill, we pride ourselves
              on offering a menu that caters to every taste.
              From  appetizers to desserts, our dishes are
              crafted with care and creativity.
              </p>
              <p className='text-white ml-2'>
               We have...
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex gap-20 px-10'>
              <div className="flex flex-col justify-center items-center">
                <img src={food1} alt="food1" className='w-3/4 mx-auto block max-w-[300px] hover:rotate-6 hover:scale-105 duration-300'></img>
                <p className='text-white pt-0 mt-0'>Starters</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={food1} alt="food1" className='w-3/4 mx-auto block max-w-[300px] hover:rotate-6 hover:scale-105 duration-300'></img>
                <p className='text-white pt-0 mt-0'>Main Courses</p>
              </div>
            </div>
            <div className='flex gap-20 px-10'>
              <div className="flex flex-col justify-center items-center">
                <img src={food1} alt="food1" className='w-3/4 mx-auto block max-w-[300px] hover:rotate-6 hover:scale-105 duration-300'></img>
                <p className='text-white pt-0 mt-0'>Desserts</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={food1} alt="food1" className='w-3/4 mx-auto block max-w-[300px] hover:rotate-6 hover:scale-105 duration-300'></img>
                <p className='text-white pt-0 mt-0'>Drinks</p>
              </div> 
            </div>
          </div>  
        </div>
    </div>
  )
}
