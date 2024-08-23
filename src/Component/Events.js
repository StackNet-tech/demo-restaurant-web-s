// ./src/components/EventsLocations.js
import React from 'react';

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-semibold mb-4">Events & Locations</h1>

        {/* Navigation */}
        <div className="flex space-x-4 text-2xl mb-12">
          <a href="#events" className="text-yellow-400">Events</a>
          <a href="#locations" className="text-gray-400">Locations</a>
        </div>

        {/* Events Section */}
        <div id="events" className="grid md:grid-cols-2 gap-8">
          {/* Wine Tasting Evening Card */}
          <div className="relative bg-black bg-opacity-50 p-6 rounded-lg flex flex-col justify-between">
            <h2 className="text-3xl mb-4">Wine Tasting Evening</h2>
            <p className="text-lg mb-6">Join us for an evening of wine tasting and gourmet food pairings.</p>
            <button className="text-black bg-white py-2 px-4 rounded">Details</button>
          </div>
          
          {/* Live Music Night Card */}
          <div className="relative bg-black bg-opacity-50 p-6 rounded-lg flex flex-col justify-between">
            <h2 className="text-3xl mb-4">Live Music Night</h2>
            <p className="text-lg mb-6">Spacious and elegantly designed, ideal for both casual and formal dining.</p>
            <button className="text-black bg-white py-2 px-4 rounded">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
