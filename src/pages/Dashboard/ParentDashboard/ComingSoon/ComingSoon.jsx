import React, { useState, useEffect } from 'react'

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const targetDate = new Date('2024-12-05T00:00:00')

  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing! We will notify you at ${email} when we launch.`);
    setEmail("")
  };

  return (
    <div className="h-screen bg-gradient-to-r from-primary to-secondary flex flex-col justify-center items-center text-white p-4">
      <h1 className="text-4xl font-bold mb-4">We're Coming Soon!</h1>
      <p className="text-xl mb-6">Our website is under construction, but we are working hard to bring you something amazing. Stay tuned!</p>
      
      <div className="flex space-x-6 mb-8">
        <div className="text-center">
          <p className="text-2xl">{timeLeft.days || 0}</p>
          <span>Days</span>
        </div>
        <div className="text-center">
          <p className="text-2xl">{timeLeft.hours || 0}</p>
          <span>Hours</span>
        </div>
        <div className="text-center">
          <p className="text-2xl">{timeLeft.minutes || 0}</p>
          <span>Minutes</span>
        </div>
        <div className="text-center">
          <p className="text-2xl">{timeLeft.seconds || 0}</p>
          <span>Seconds</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Enter your email to get notified"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-md mb-4 w-80 md:w-96 text-black"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white p-3 rounded-md hover:bg-secondary transition"
        >
          Notify Me
        </button>
      </form>
    </div>
  );
};

export default ComingSoon;
