import React, { useState } from 'react';
import { eventsData } from "../Data/Data";
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'; 

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter events based on search term
    const filtered = eventsData.filter(event =>
      event.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleDateFilter = (date) => {
    setSelectedDate(date);
    // Filter by selected date
    const filtered = eventsData.filter(event => event.date === date);
    setFilteredEvents(filtered.length ? filtered : eventsData);
  };

  const toggleDescription = (id) => {
    setVisibleDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Explore Events</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search events"
          className="w-full p-2 rounded-md border-2 border-gray-300 outline-none focus:border-blue-500 focus:outline focus:outline-2 focus:outline-blue-200" // Added outline for search input
        />
        <select
          value={selectedDate}
          onChange={(e) => handleDateFilter(e.target.value)}
          className="w-full sm:w-1/3 mt-2 sm:mt-0 p-2 rounded-md border-2 border-gray-300 outline-none focus:border-blue-500 focus:outline focus:outline-2 focus:outline-blue-200" // Added outline for select input
        >
          <option value="">Select Date</option>
          {Array.from(new Set(eventsData.map(event => event.date))).map((date, idx) => (
            <option key={idx} value={date}>{date}</option>
          ))}
        </select>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
            <Link to={`/dashboard/event/${event.id}`}>
              <img
                src={event.image ? assets[event.image.split('/').pop().split('.')[0]] : assets.defaultImage}
                alt={event.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-1">{event.date} • {event.location}</p>
              <button
              onClick={() => toggleDescription(event.id)}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              {visibleDescriptions[event.id] ? "Hide Details" : "View Details"}
            </button>
            </Link> 

            {/* Conditionally render the description */}
            {visibleDescriptions[event.id] && (
              <p className="text-gray-800 mb-4">{event.description}</p>
            )}

          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
