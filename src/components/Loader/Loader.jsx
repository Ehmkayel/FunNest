import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000);

    return () => clearTimeout(timeout)
  }, []);

  if (!loading) return null

  const letters = "FunNest".split(''); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-20 h-20 animate-spin rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500">
        <div className="absolute inset-0 m-2 bg-gray-100 rounded-full"></div>
      </div>
      <div className="ml-4 flex text-2xl font-bold text-gray-700">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block"
            style={{
              animation: `fadeIn 0.5s ease ${index * 0.2}s forwards`, 
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
