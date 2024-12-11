import React, { useState } from 'react';

import UserDetails from '../forms/createUser';
import CustomModal from './custom-modeal';


function NotFound({ heading }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    // Define your logic for handling the form success event here
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h1 className="text-2xl font-light mb-6">{heading}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 h-12 w-48 rounded-md"
        onClick={() => setIsModalOpen(true)}
      >
        Create a new User
      </button>

      {isModalOpen && (
        
<div >
        <CustomModal  title="Create Contact"
        subheading="Fill the form to add a new contact."
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}> <UserDetails onSuccess={handleClick} /></CustomModal></div>
      )}
    </div>
  );
}

export default NotFound;
