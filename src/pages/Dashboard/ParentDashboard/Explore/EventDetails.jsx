import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import { FiMapPin } from 'react-icons/fi';
import { FaArrowLeft, FaCalendar } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa';
import Register from '../../components/Register/Register';
import Button from '../../components/ReUsable/Button';
import axios from 'axios';

const EventDetails = () => {
  const { id } = useParams(); 
  const [eventData, setEventData] = useState(null); 
  const [similarEvents, setSimilarEvents] = useState([]); 
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const allEventsResp = await axios.get(`${BASE_URL}events/all`);
        const allEvents = allEventsResp.data.data;

        // Find the specific event by ID
        const fetchedEvent = allEvents.find(event => event.id === parseInt(id));

        if (fetchedEvent) {
          setEventData(fetchedEvent);
          const similarEventsList = allEvents.filter(event => event.id !== fetchedEvent.id);
          setSimilarEvents(similarEventsList.slice(0, 4)); 
        } else {
          console.log("Event not found");
        }
      } catch (error) {
        console.log("Error fetching events", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);


  if (loading) {
    return (
      <section className="flex justify-center items-center h-[100vh]">
        <p className='animate-spin w-6 h-6 rounded-full p-[2rem] border-slate-700 border-2 border-t-4 border-t-red-500'></p>
      </section>
    );
  }

  if (!eventData) {
    return <p className="text-red-600 text-center">Event not found!</p>;
  }

  return (
    <main>
      <section className='relative flex flex-col h-[450px] items-start justify-center bg-services-bg bg-no-repeat bg-center bg-cover rounded-b-[45px]'>
        <div className='px-4 lg:px-[3rem] max-w-[1364px] container w-full mx-auto space-y-2 md:space-y-5 pt-[3rem] md:pt-0'>
          <Link to='/events' className='text-white flex items-center gap-2 cursor-pointer font-medium text-base leading-[22.4px]'>
            <FaArrowLeft className='text-white'/>
            <p>Back to events</p>
          </Link>
          <h3 className='text-white font-bold text-lg md:text-[40px] leading-[56px]'>{eventData.title}</h3> 
          <div className='flex flex-col md:flex-row items-center gap-3'>
            <span className='flex items-center gap-3 text-white max-w-[395px] w-full rounded-2xl border p-4 bg-border-gradient'>
              <FiMapPin/>
              <p>{eventData.address}</p>
            </span>
            <div className='text-white w-full md:max-w-[200px] rounded-2xl border p-4 bg-border-gradient'>
              <span className='flex items-center gap-2'>
                <FaCalendar/>
                <p>{eventData.start_date}</p>
              </span>
              <span className='flex items-center gap-2'>
                <FaClock/>
                <p>{eventData.start_date_time}</p>
              </span>
            </div>
          </div>
        </div>
      </section>
     
      <section className='mt-10 flex flex-col lg:flex-row gap-20 px-4 lg:px-[3rem] max-w-[1364px] container w-full mx-auto pb-10 lg:pb-20'>
        
        <div className='flex flex-col w-full lg:max-w-md xl:max-w-[811px] pb-4 lg:pb-0'>
        <img src={`${IMAGE_BASE_URL}${eventData.banner}`} alt={eventData.title} className='rounded-lg h-[400px] w-[900px] object-contain transition-transform duration-200 ease-in-out'/>
          <p dangerouslySetInnerHTML={{__html: eventData.description}} style={{ whiteSpace: 'pre-line' }}></p>
        
        </div>
        <div className='mt-[-5rem] z-20'>
          <Register/>
        </div>
      </section>

      <section className='px-4 lg:px-[3rem] max-w-[1364px] container w-full mx-auto py-2 lg:py-10'>
        <h3 className='text-[#2C2C2C] heading text-[32px] font-bold leading-[28.8px]'>Similar Events</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-3 lg:pt-6'>
          {similarEvents.map((similarEvent) => (
            <Link key={similarEvent.id} to={`/event/${similarEvent.id}`} className='w-full'>
              <div className="card flex flex-col rounded-[40px] border-[1.5px] border-[#C4C3BF] p-4 bg-white h-full">
                <div className='flex-grow'>
                  <h2 className='heading text-lg font-bold leading-[25.2px] text-footerBorder'>{similarEvent.title}</h2>
                  <p className='heading font-bold text-lg leading-[25.2px] text-footerBorder'>{similarEvent.start_date_time}</p>
                  <p className='text-base btn font-normal mt-[6px]'>{similarEvent.address}</p>
                  <p className='text-base text-[#444444BF]' dangerouslySetInnerHTML={{ __html: similarEvent.description.substring(0, 100) + '...' }}></p>
                </div>
                <Button link={`/register/${similarEvent.id}`} className='bg-button text-white px-2 lg:px-6 max-w-[107px] btn text-base py-3 mt-4 lg:py-3 border-2'>
                  Register
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default EventDetails;
