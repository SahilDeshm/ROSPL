import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const [formData, setFormData] = useState({
    fullName: 'USER FULL NAME',
    walletAddress: 'Abcd',
    bio: 'Living In Artistic World',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveProfile = () => {
    console.log('Profile updated:', formData);
    setShowPopup(true); // Show the success popup
    // You can add an API call here to save the updated profile data
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="p-6">
      <button
        onClick={handleBackClick}
        className="mb-4 bg-gray-200 px-4 py-2 rounded-lg"
      >
        Back
      </button>

      <div className="text-center">
        <img
          src="https://i.pinimg.com/236x/2c/91/d3/2c91d3bcdbec5dab6ce32a57033837e0.jpg"
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full"
        />
        <h2 className="text-xl font-bold mt-2">{formData.fullName}</h2>
      </div>

      <div className="mt-6">
        <label className="block mb-2 font-bold">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 w-full rounded-lg"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2 font-bold">Wallet Address</label>
        <input
          type="text"
          name="walletAddress"
          value={formData.walletAddress}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 w-full rounded-lg"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2 font-bold">Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 w-full rounded-lg"
        />
      </div>

      <button
        onClick={handleSaveProfile}
        className="mt-6 bg-black text-white px-4 py-2 rounded-lg"
      >
        Save Profile
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">Profile Updated Successfully!</h3>
            <button
              onClick={closePopup}
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
