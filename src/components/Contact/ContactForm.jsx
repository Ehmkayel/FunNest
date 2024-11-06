import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold">Form Submitted</h2>
        <p>{message}</p>
        <button
          className="mt-4 bg-blue-500 text-white rounded-full py-2 px-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    }
    if (!subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

   
    try {
      // await api.submitContactForm({ fullName, email, phoneNumber, subject, message });
      console.log("Form submitted", { fullName, email, phoneNumber, subject, message });
      setIsModalOpen(true); // Open the modal
    } catch (error) {
      console.error('Error submitting form', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    // Reset form fields
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setSubject('');
    setMessage('');
    setIsModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='bg-primary shadow-lg rounded-lg p-4 xl:p-10 space-y-4 w-full max-w-[700px] mx-auto'>
        <h1 className='font-bold text-lg lg:text-[32px] leading-[30px] lg:leading-[44.8px]'>Leave a Message</h1>
        <div className='flex flex-col md:flex-row gap-[10px]'>
          <input
            type='text'
            name='fullname'
            id='fullname'
            placeholder='Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className='rounded-md border px-[21px] pt-3 pb-[13px] focus:outline-none focus:ring-1 focus:ring-[#AFAFAF] w-full md:max-w-[251px]'
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}

          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='rounded-md border px-[21px] pt-3 pb-[13px] focus:outline-none focus:ring-1 focus:ring-[#AFAFAF] w-full md:max-w-[251px]'
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className='flex flex-col md:flex-row gap-[10px]'>
          <input
            type='tel'
            name='phone'
            id='phone'
            placeholder='Phone Number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className='rounded-md border px-[21px] pt-3 pb-[13px] focus:outline-none focus:ring-1 focus:ring-[#AFAFAF] w-full md:max-w-[222px]'
          />
          {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}

          <input
            type='text'
            name='subject'
            id='subject'
            placeholder='Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className='rounded-md border px-[21px] pt-3 pb-[13px] focus:outline-none focus:ring-1 focus:ring-[#AFAFAF] w-full md:max-w-[280px]'
          />
          {errors.subject && <p className="text-red-500">{errors.subject}</p>}
        </div>
        <div>
          <textarea
            name='message'
            id='message'
            placeholder='Type your message here'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='rounded-3xl border px-3 lg:px-[21px] pt-3 pb-[13px] focus:outline-none focus:ring-1 focus:ring-[#AFAFAF] w-full max-w-[512px] h-32 lg:h-48 '
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button
          type='submit'
          className={`bg-secondary border-2 font-bold text-base text-white rounded-full py-2 px-4 ${isLoading ? 'opacity-50' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Submit'}
        </button>
      </form>

      {isModalOpen && (
        <Modal message="Thank you for your message! We will get back to you soon." onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ContactForm;
