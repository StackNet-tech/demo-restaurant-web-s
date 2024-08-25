import React from 'react';

const Service = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: ""}}></div>
      
      <div className="relative text-center text-white">
        <h1 className="text-5xl font-bold">Food & Services</h1>
        <p className="text-lg mt-2">We offer a wide range of food and services to cater to your dining needs.</p>
        
        <div className="mt-20 flex justify-center space-x-8">
          
          <div className="relative max-w-[400px] bg-gray-800 bg-opacity-70 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center h-[400px]">
            <h2 className="text-2xl font-bold mb-4 absolute top-10">Catering Services</h2>
            <p>Whether it’s a corporate event or a private celebration, our catering team can provide a customized menu to suit your needs.</p>
            <button className="mt-6 w-40 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 absolute bottom-6">Contact Us</button>
          </div>

          
          <div className="relative max-w-[400px] bg-gray-800 bg-opacity-70 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center h-[400px]">
            <h2 className="text-2xl font-bold mb-4 absolute top-10">Event Planning</h2>
            <p>From weddings to corporate functions, our event planning services ensure every detail is taken care of.</p>
            <button className="mt-6 w-40 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 absolute bottom-6">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
