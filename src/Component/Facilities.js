// ./src/components/Facilities.js
import React from 'react';
import bgFac from '../assests/facilities/bgFac.png';

const bg = {
    backgroundImage: `url(${bgFac})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '100vh',
}

const Facilities = () => {


  return (
    <div style={bg} className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 ">
        <h1 className="text-6xl font-semibold mb-8">Facilities</h1>
        <p className="text-lg mb-12">
          At Grill & Chill, we offer a range of facilities to ensure your comfort and enjoyment.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black p-6 rounded-lg h-80">
            <h2 className="text-3xl mb-4">Main Dining Room</h2>
            <p className="text-lg mb-6">
              Spacious and elegantly designed, ideal for both casual and formal dining.
            </p>
            <button className="text-black bg-white py-2 px-4 rounded">View</button>
          </div>
          <div className="bg-black p-6 rounded-lg h-80">
            <h2 className="text-3xl mb-4">Private Rooms</h2>
            <p className="text-lg mb-6">
              Perfect for intimate gatherings and special events.
            </p>
            <button className="text-black bg-white py-2 px-4 rounded">View</button>
          </div>
        </div>
        
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
            </svg>
            <p>Stay connected with our complimentary Wi-Fi service.</p>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 8a1 1 0 100-2 1 1 0 000 2zm-2 1a1 1 0 112-0 1 1 0 01-2 0zM3.5 11A1.5 1.5 0 015 9.5h.793l2.553-2.553a4 4 0 115.707 5.707L8.707 17.293a4 4 0 01-5.707-5.707L5 8.293V7.5A1.5 1.5 0 003.5 9.5H2A1.5 1.5 0 010 7.5V7a5 5 0 015-5h10a5 5 0 015 5v3a5 5 0 01-5 5H9a1 1 0 100 2h6a3 3 0 100-6V7a3 3 0 10-6 0v2a1 1 0 11-2 0V7H6a3 3 0 100 6H7.5a1.5 1.5 0 010 3H2A2 2 0 01.5 9.5H0zM3 12a2 2 0 104 0 2 2 0 00-4 0zm1-1a1 1 0 112-0 1 1 0 01-2 0z" />
            </svg>
            <p>Our restaurant is fully accessible for guests with disabilities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
