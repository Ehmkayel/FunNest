import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { auth } from '../../config/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modalMessage, setModalMessage] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [modalParagraph, setModalParagraph] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const closeModalAndNavigate = () => {
    setIsModalOpen(false)
    navigate('/dashboard')
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password)
      setModalMessage('You have successfully Logged In!')
      setModalTitle('Success')
      setModalParagraph('You can now access your dashboard.')
      setIsModalOpen(true);
    } catch (error) {
      setModalMessage('There was an issue logging into your account, kindly login with a valid email and password.');
      setModalTitle('Error');
      setModalParagraph('Please check your credentials and try again.')
      setIsModalOpen(true) 
    } finally {
      setIsLoading(false)
    }
  };


  const Modal = ({ isOpen, closeModal, title, paragraph, message }) => {
    if (!isOpen) return null; 

    return (
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="modal-overlay bg-black fixed inset-0 opacity-50 z-40"></div>
        <div className="modal-container max-w-[620px] bg-white rounded-lg shadow-md mx-auto flex items-center justify-center z-50">
          <div className="modal-content py-5 px-3 md:px-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
            >
              X
            </button>
            <div className="modal-header p-2 md:p-4 pb-4 w-full">
              <h1 className="font-bold text-xl text-primary text-center">{title}</h1>
              <p className="text-center">{paragraph}</p>
            </div>
            <div className="modal-body text-center">
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <div className="spinner-border animate-spin border-4 border-t-4 border-primary rounded-full w-8 h-8"></div>
                </div>
              ) : (
                <p>{message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModalAndNavigate}
        title={modalTitle}
        paragraph={modalParagraph}
        message={modalMessage}
      />

      <div className="flex items-center justify-center h-screen bg-primary pt-[8rem]">
        <div id="login-container" className="bg-white shadow-lg w-full max-w-lg rounded-3xl p-[2rem]">
          <span className="inline-flex items-center space-x-1 mb-3">
            <FaArrowLeft />
            <a href="/">Back to Home</a>
          </span>
          <h2 className="mb-3 text-black text-center text-lg heading">Login</h2>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="input-group mb-2 text-left">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-[#ddd] rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group mb-2 text-left">
              <label htmlFor="password" className="block mb-1 text-[#555]">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-[#ddd] rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-[30%] p-2 border-none bg-secondary text-white text-lg cursor-pointer rounded-lg hover:bg-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            <div className="options mt-4 text-center">
              <p className="mt-2">
                Don't have an account yet? <a href="/register" className="text-secondary">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
