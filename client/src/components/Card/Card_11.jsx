import React from 'react';

function Card_11() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ width: '18rem' }}>
      <img
        className="w-full h-48 object-cover"
        src="https://iconduck.com/emojis/43728/instagram?shared" // You can replace this with the actual image URL
        alt="Card Image"
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">Hospital Facilities</h5>
        <p className="text-gray-700 mb-4">
        Explore our advanced facilities designed for your well-being.
        </p>
        <a
        href="/appointment"
        className="text-blue-500 hover:text-red-600 flex items-center space-x-2"
        >
        <span>View More</span>
        <span className="text-red-600">&gt;</span>
        </a>

      </div>
    </div>
  );
}

export default Card_11;
