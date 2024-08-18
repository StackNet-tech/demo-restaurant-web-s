import React from 'react';
import home from '../assests/home/home.png';
import title from '../assests/home/title.png';

const bgHome = {
    backgroundImage: `url(${home})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',}
const Hero = () => {
    return (
    <>
    <div style={bgHome}
    className="min-h-[550px] md:min-h-[600px] 
    duration-200 flex justify-center items-center">
        <div className="container pb-8 md:pb-0">
            <div className='grid grid-cols-1 md:grid-cols-2'>

                <div className="flex flex-col
                justify-center gap-4 pt-1 pl-10 pr-12 ">

                    <img src={title} alt="title"
                    className='w-2/4 -mt-55 '/>

                    <p className='text-white ml-2'>
                    Welcome to Grill & Chill,
                    where exquisite dining meets
                    unparalleled comfort.
                    Our  restaurant offers a delightful
                    experience with a diverse menu,
                    elegant facilities, and exceptional  service.
                    Whether you’re here for a casual meal,
                    a special occasion, or an event, we’re dedicated
                    to making your visit memorable.  
                    </p>

                    <div>
                        <button className="bg-yellow-600
                                           hover:bg-yellow-800
                                           hover:scale-105
                                           duration-300
                                           text-white font-semibold
                                           py-2 px-4 rounded-lg ml-2">
                        ORDER NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Hero;    