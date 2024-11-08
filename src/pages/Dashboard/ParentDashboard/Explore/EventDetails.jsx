import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { eventsData } from '../../../../components/Data/Data';
import RegisterForm from './RegisterForm';
import Loader from '../../../../components/Loader/Loader';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = eventsData.find((event) => event.id === parseInt(id));
    setEvent(foundEvent);
  }, [id]);

  if (!event) {
    return <p className="text-center text-lg">Event not found.</p>;
  }

  return (
    <>
      <Loader/>
      <main className="flex flex-col md:flex-row p-8 md:p-12 gap-10 space-y-8 md:space-y-0">
      
      <div className="w-full md:w-2/3 space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-4">{event.title}</h1>
        <img
          src={event.image}
          alt={event.title}
          className="h-[400px] w-full rounded-md object-cover shadow-lg"
        />
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg text-gray-700">{event.date}</p>
          <p className="text-lg text-primary font-semibold">Ticket Price: {event.ticket_price}</p>
        </div>
        <div className="mt-4 text-gray-800">
          <p><span className="font-semibold">Location:</span> {event.location}</p>
          <p><span className="font-semibold">Event Type:</span> {event.event_type}</p>
          <p><span className="font-semibold">Duration:</span> {event.duration}</p>
          <p><span className="font-semibold">Contact:</span> {event.contact_email}</p>
          <p><span className="font-semibold">Age Group:</span> {event.age_group}</p>
          <p><span className="font-semibold">Organizer:</span> {event.organizer}</p>
        </div>
        <p className="mt-4 text-gray-800">{event.description}</p>
      </div>

      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-primary mb-4">Register for this Event</h2>
        <RegisterForm eventId={event.id} />
      </div>
    </main>
    </>
    
  );
};

export default EventDetails;
