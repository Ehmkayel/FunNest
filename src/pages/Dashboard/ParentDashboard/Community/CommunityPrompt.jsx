import React, { useState, useEffect } from 'react'
import Landing from '../../../Landing/Landing'
import Modal from '../../../../components/Reusable/Modal'


const CommunityPrompt = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  return (
    <>
    <Landing/>
     <Modal
      isOpen={isModalOpen}
      closeModal={closeModal}
      title="Join Our Community!"
      paragraph="To become a member, please sign up first. If you’re already a member, simply log in to continue."
    >
      <div className='flex items-center justify-center gap-10'>
        <a href="/login" className="bg-primary text-white font-bold py-2 px-3 rounded-md">Login</a>
        <a href="/register" className="bg-primary text-white font-bold py-2 px-3 rounded-md">Register</a>
        <a href="/" className="bg-primary text-white font-bold py-2 px-3 rounded-md">Home</a>
      </div>
    </Modal>
    
    </>

   
  );
};

export default CommunityPrompt;
