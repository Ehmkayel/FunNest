import React from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { auth } from "../../config/FirebaseConfig"

const LogoutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleConfirmLogout = async () => {
    try {
      await auth.signOut();
      toast.info("You have logged out successfully.");
      navigate("/login");
    } catch (error) {
      toast.error("Failed to log out. Please try again.");
    }
  };

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-primary">
        <h2 className="text-lg font-bold mb-4">Confirm Logout</h2>
        <p className="mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="bg-gray-300 text-gray-700 font-bold px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleConfirmLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
