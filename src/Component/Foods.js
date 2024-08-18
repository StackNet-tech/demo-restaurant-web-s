import React from 'react'
import food1 from '../assests/menu/food1.png';
import bgFood from '../assests/food/food_bg.png';

const bg = {
    backgroundImage: `url(${bgFood})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '100vh',
}

const foodDetails =[
    {
        id: 1,
        img: food1,
        name: "food1",
        amount: 1,
        price: 1000,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        img: food1,
        name: "food2",
        amount: 1,
        price: 1000,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        img: food1, 
        name: "food3",
        amount: 1,
        price: 1000,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 4,
        img: food1, 
        name: "food4",
        amount: 1,
        price: 1000,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 5,
        img: food1, 
        name: "food4",
        amount: 1,
        price: 1000,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 6,
        img: food1, 
        name: "food4",
        amount: 1,
        price: 1000,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 7,
        img: food1, 
        name: "food4",
        amount: 1,
        price: 1000,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

const Foods = () => {
    return (
        <div style={bg} className='flex justify-center items-center '>
            {/* Add mt-10 or any other value to create space between this component and the previous one */}
            <div className='container pb-8 md:pb-8 mt-20'>
                <div>
                    <p className='text-white pt-0 mt-0 ml-10'>Starters</p>
                    <div className='flex flex-col justify-center ml-10'>
                        <ul className='flex flex-row gap-10 overflow-y-auto scrollbar-hide'>
                            {foodDetails.map(({ id, img, name, price, desc, amount }) => (
                                <li key={id} className='items-center justify-center'>
                                    <div className="flex flex-col justify-center bg-[#101010] p-4 rounded-3xl min-w-[175px]">
                                        <img src={img} alt={name} className='w-full mx-0 block sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]' />
                                        <p className='text-white font-semibold text-xl pt-0 mt-0'>{name}</p>
                                        <p className='text-white/50 text-sm pt-0 mt-0'>{amount}pcs</p>
                                        <div className='flex mt-3 justify-between'>
                                            <p className='text-white pt-0 '>{price} RS</p>
                                            <button className='btn btn-primary text-white bg-yellow-600 px-2 sm:text-xs md:text-sm lg:text-base rounded-lg hover:bg-yellow-700 hover:scale-105'>Buy Now</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Repeat for other sections (Main Courses, Desserts) */}
                    {/* Add top margin between sections if needed */}
                    <p className='text-white pt-0 mt-10 ml-10'>Main Courses</p>
                    <div className='flex flex-col justify-center ml-10'> 
                        <ul className='flex flex-row gap-10 overflow-y-auto scrollbar-hide'>
                            {foodDetails.map(({ id, img, name, price, desc, amount }) => (
                                <li key={id} className='items-center justify-center'>
                                    <div className="flex flex-col justify-center bg-[#101010] p-4 rounded-3xl min-w-[175px]">
                                        <img src={img} alt={name} className='w-full mx-0 block sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]' />
                                        <p className='text-white font-semibold text-xl pt-0 mt-0'>{name}</p>
                                        <p className='text-white/50 text-sm pt-0 mt-0'>{amount}pcs</p>
                                        <div className='flex mt-3 justify-between'>
                                            <p className='text-white pt-0 '>{price} RS</p>
                                            <button className='btn btn-primary text-white bg-yellow-600 px-2 sm:text-xs md:text-sm lg:text-base rounded-lg hover:bg-yellow-700 hover:scale-105'>Buy Now</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className='text-white pt-0 mt-10 ml-10'>Desserts</p>
                    <div className='flex flex-col justify-center ml-10'> 
                        <ul className='flex flex-row gap-10 overflow-y-auto scrollbar-hide'>
                            {foodDetails.map(({ id, img, name, price, desc, amount }) => (
                                <li key={id} className='items-center justify-center'>
                                    <div className="flex flex-col justify-center bg-[#101010] p-4 rounded-3xl min-w-[175px]">
                                        <img src={img} alt={name} className='w-full mx-0 block sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]' />
                                        <p className='text-white font-semibold text-xl pt-0 mt-0'>{name}</p>
                                        <p className='text-white/50 text-sm pt-0 mt-0'>{amount}pcs</p>
                                        <div className='flex mt-3 justify-between'>
                                            <p className='text-white pt-0 '>{price} RS</p>
                                            <button className='btn btn-primary text-white bg-yellow-600 px-2 sm:text-xs md:text-sm lg:text-base rounded-lg hover:bg-yellow-700 hover:scale-105'>Buy Now</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className='text-white pt-0 mt-10 ml-10'>Drinks</p>
                    <div className='flex flex-col justify-center ml-10'> 
                        <ul className='flex flex-row gap-10 overflow-y-auto scrollbar-hide'>
                            {foodDetails.map(({ id, img, name, price, desc, amount }) => (
                                <li key={id} className='items-center justify-center'>
                                    <div className="flex flex-col justify-center bg-[#101010] p-4 rounded-3xl min-w-[175px]">
                                        <img src={img} alt={name} className='w-full mx-0 block sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]' />
                                        <p className='text-white font-semibold text-xl pt-0 mt-0'>{name}</p>
                                        <p className='text-white/50 text-sm pt-0 mt-0'>{amount}pcs</p>
                                        <div className='flex mt-3 justify-between'>
                                            <p className='text-white pt-0 '>{price} RS</p>
                                            <button className='btn btn-primary text-white bg-yellow-600 px-2 sm:text-xs md:text-sm lg:text-base rounded-lg hover:bg-yellow-700 hover:scale-105'>Buy Now</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foods;