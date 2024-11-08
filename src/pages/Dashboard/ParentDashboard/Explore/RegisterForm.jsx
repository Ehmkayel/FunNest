import React, { useState } from 'react';
import { db } from '../../../../config/FirebaseConfig';  
import { collection, addDoc } from 'firebase/firestore';

const RegisterForm = ({ eventId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    const registrationsRef = collection(db, 'eventRegistrations')
    try {
      await addDoc(registrationsRef, {
        eventId,
        name,
        email,
        message,
        timestamp: new Date(),
      });
      setMessage('Registration successful!');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error registering for event:', error);
      setMessage('Registration failed. Please try again later.');
    }
  };

  return (
    <div className="registration-form p-6">
      <h2 className="text-2xl font-semibold mb-4">Register for Event</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message (optional)</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
