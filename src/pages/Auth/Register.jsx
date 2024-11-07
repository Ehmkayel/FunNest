import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { auth, db } from '../../config/FirebaseConfig';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [surName, setSurName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [modalMessage, setModalMessage] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const closeModalAndNavigate = () => {
    setIsModalOpen(false)
    navigate('/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setModalMessage('Passwords do not match, please check your password and confirm password fields.');
      setModalTitle('Error');
      setModalType('error');
      setIsModalOpen(true);
      return;
    }

    setIsLoading(true); 

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          firstName,
          middleName,
          surName,
        });

        setModalMessage('You have successfully registered!');
        setModalTitle('Success');
        setModalType('success');
        setIsModalOpen(true);
      }
    } catch (error) {
      setModalMessage('There was an issue creating your account, kindly register with a new email.');
      setModalTitle('Error');
      setModalType('error');
      setIsModalOpen(true);
    } finally {
      setIsLoading(false); 
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
        message={modalMessage} 
     />

      <div className="flex items-center justify-center min-h-screen pt-[6rem] bg-primary">
        <div className="w-full max-w-md bg-white shadow-lg rounded-3xl p-6">
          <span className="inline-flex items-center space-x-1 mb-3">
            <FaArrowLeft />
            <a href="/">Back to Home</a>
          </span>
          <h2 className="text-2xl font-semibold text-center mb-6 heading">Sign Up</h2>
          <form id="signupForm" onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              name="middle_name"
              placeholder="Middle Name (Optional)"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="remember_me" id="remember_me" className="h-4 w-4" />
              <label htmlFor="remember_me" className="text-gray-700">Remember Me</label>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-secondary text-white font-semibold rounded-lg hover:bg-primary"
              disabled={isLoading} 
            >
              {isLoading ? 'Registering...' : 'Sign Up'}
            </button>
          </form>
          <div className="text-center mt-4">
            <p>Already have an account? <a href="/login" className="text-secondary hover:underline">Log In</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
