import React from 'react'

function Card_3() {
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
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              MAKE AN APPOINTMENT
            </button>
          </div>
        </div>
      );
}

export default Card_3