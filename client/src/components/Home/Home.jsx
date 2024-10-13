import React from 'react';
import { Link } from 'react-router-dom';
import Card_1 from '../Card/Card_1';
import Card_2 from '../Card/Card_2';
import Card_3 from '../Card/Card_3';
import Card_11 from '../Card/Card_11'; // Importing Card_11


export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">

      {/* Image Carousel Section */}
      <section className="relative overflow-hidden rounded-lg sm:mx-16 mx-2 sm:py-16 py-8">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
            </h2>
            <Link
              className="inline-flex items-center px-6 py-3 font-medium text-white bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download now
            </Link>
          </div>
        </div>

        {/* Carousel */}
        
      </section>

      {/* Three Cards Section */}
      <section className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
        <Card_1 />
        <Card_2 />
        <Card_3 />
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-50">
        <h1 className="text-center text-2xl sm:text-5xl font-medium mb-10">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-16">
          {/* Using Card_11 components */}
          <Card_11/>
          <Card_11/>
          <Card_11/>
          <Card_11/>
          <Card_11/>
          <Card_11/>
        </div>
      </section>
    </div>
  );
}
