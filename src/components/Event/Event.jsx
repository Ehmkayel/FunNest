import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";
import { eventsData } from "../Data/Data";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      id="events"
      className="py-16 px-4 g:px-[3rem] xl:px-[5rem] pt-[3rem] bg-gray-100"
    >
      <div className="max-w-[1440px] w-full mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Upcoming Events
        </h2>
        <div className="mb-8 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.slice(0, 3).map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-500 mb-2">
                  <FaCalendarAlt className="inline mr-1" />
                  {event.date}
                </p>
                <p className="text-gray-500 mb-2">
                  <FaMapMarkerAlt className="inline mr-1" />
                  {event.location}
                </p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <Link to="/explore-prompt">
                  <button className="bg-secondary text-white font-bold px-4 py-2 rounded hover:bg-blue-600">
                    <FaInfoCircle className="inline mr-1" /> More Info
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
