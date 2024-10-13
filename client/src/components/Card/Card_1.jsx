import React from 'react';

function Card_1() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ width: '23rem' }}>
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/150" // Replace with your actual image URL
        alt="Card Image"
      />
      <div className="p-6">
        <h5 className="text-xl font-semibold mb-2">Online Appointment</h5>
        <p className="text-gray-700 mb-4">
          Get all-time support for emergencies. We have introduced the principle of family medicine.
        </p>
        <a
          href="/appointment" // Replace with your actual link
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block text-center"
        >
          MAKE AN APPOINTMENT
        </a>
      </div>
    </div>
  );
}

export default Card_1;
