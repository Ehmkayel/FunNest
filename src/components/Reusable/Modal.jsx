import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Modal = ({isOpen, closeModal, title, paragraph, children, className}) => {
  const handleClickOutside = (e) => {
    if(e.target.classList.contains('modal-overlay')){
      closeModal()
    }
  }

  useEffect(() => {
    if(isOpen){
      document.addEventListener('click', handleClickOutside)
    }else{
      document.removeEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen, closeModal]);

  if(!isOpen){
    return null
  }


  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center'>
      <div className='modal-overlay bg-black fixed inset-0 opacity-50 z-40'></div>
      
      <div className={`modal-container max-w-[620px] bg-secondary rounded-lg shadow-md mx-auto flex items-center justify-center z-50 ${className}`}>
        <div className='modal-content py-5 md:py-10 px-3 md:px-8 relative'>
          <Link to = "/"
            className='absolute top-2 right-2  bg-red-500 w-[2rem] h-[2rem] flex justify-center items-center text-white rounded-full p-2'
          >
            X
          </Link>
          <div className='modal-header p-2 md:p-4 pb-4 w-full'>
            <h1 className='font-bold text-base md:text-2xl text-primary text-center'>{title}</h1>
            <p>{paragraph}</p>
          </div>
          <div className='modal-body'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal