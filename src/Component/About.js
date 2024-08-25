import React from 'react'
import aboutbg from "../assests/about/aboutBG.png";

const About = () => {
  return (

    <section id="about" style={{ backgroundImage: `url(${aboutbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'transparent' }}

      className="min-h-screen p-4 text-slate-50">
      <div className='ml-20 pb-8 md:pb-8 mt-20'>

      <div className='ml-10 w-1/2 text-left'>
           <h1 className='text-4xl font-bold mb-2'>About Us</h1>
           <p className='flex justify-start text-lg'>Grill & Chill was established in 2024 with a mission to provide an exceptional dining  experience. Our team is passionate about food and dedicated to delivering outstanding service.  Our restaurant combines modern elegance with a warm, inviting atmosphere, making it the  perfect place for any occasion.</p>
         </div>

         <div className="w-full mb-8 flex justify-end py-10 ">
        <div className="text-right w-1/2 mr-20">
          <h2 className="text-4xl font-bold mb-2">Our Story</h2>
          <p className="text-lg">
            From humble beginnings to becoming a beloved dining destination, our journey has been one of dedication and love for culinary excellence.
          </p>
        </div>
      </div>

         <div className='ml-10 w-1/2 text-left'>
           <h1 className='text-4xl font-bold mb-2'>Our Mission</h1>
           <p className='flex justify-start text-lg'>To provide a memorable dining experience through exceptional food, service, and ambiance.</p>
         </div>
      </div>
         
    </section>
  )
}

export default About