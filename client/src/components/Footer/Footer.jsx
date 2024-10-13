import React from 'react';
import { Link } from 'react-router-dom';
import hospitalImage from './hospital.png'; // Import the image

export default function Footer() {
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-4">
        {/* Main Grid for the Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="mb-6">
            <Link to="/" className="flex items-center">
              <img
                src={hospitalImage} // Use the imported image
                className="mr-3 h-16"
                alt="Aarogya Bhawan"
              />
              <span className="text-lg font-bold text-navy-blue">Aarogya Bhawan</span>
            </Link>
            <p className="mt-4 text-gray-700 text-sm leading-relaxed">
              Aarogya Bhawan in Prayagraj is <br />
              geared towards providing the most <br />
              comprehensive health care services to <br />
              its patients at an affordable price.
            </p>
          </div>

          {/* Department Section */}
          <div>
            <h2 className="mb-4 text-sm font-bold text-navy-blue uppercase">Department</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-2 hover:underline">
                <Link to="/surgery">Surgery</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link to="/womens-health">Women's Health</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link to="/orthopaedics">Orthopaedics</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link to="/cardiac">Cardiac</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link to="/medicine">Medicine</Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="mb-4 text-sm font-bold text-navy-blue uppercase">Support</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-2 hover:underline">
                <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
              </li>
              <li className="mb-2 hover:underline">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="mb-4 text-sm font-bold text-navy-blue uppercase">Get In Touch</h2>
            <p className="text-gray-500 font-medium">
              <span className="block mb-2">Support Available for 24/7</span>
              <a
                href="mailto:connect.dwivedihospital@gmail.com"
                className="block mb-2 text-blue-500 hover:underline"
              >
                birjesh.20225024@mnnit.ac.in
              </a>
              <span className="block mb-2">Mon to Fri: 15:00 - 22:00</span>
              <a
                href="tel:+918081955858"
                className="block mb-2 text-blue-500 hover:underline"
              >
                +91 8081955858
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* Bottom Section with Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024 Aarogya Bhawan. All Rights Reserved.
          </span>

          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-5 sm:mt-0">
            <a href="https://www.facebook.com" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a href="https://www.twitter.com" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>

            <a href="https://www.instagram.com/birjesh_gupta00000/" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .917c2.737 0 3.067.01 4.148.06 1.08.05 1.818.216 2.462.46a4.935 4.935 0 0 1 1.785 1.164 4.935 4.935 0 0 1 1.164 1.785c.244.644.41 1.382.46 2.462.05 1.08.06 1.411.06 4.148s-.01 3.067-.06 4.148c-.05 1.08-.216 1.818-.46 2.462a4.922 4.922 0 0 1-2.949 2.949c-.644.244-1.382.41-2.462.46-1.08.05-1.411.06-4.148.06s-3.067-.01-4.148-.06c-1.08-.05-1.818-.216-2.462-.46a4.935 4.935 0 0 1-1.785-1.164 4.935 4.935 0 0 1-1.164-1.785c-.244-.644-.41-1.382-.46-2.462-.05-1.08-.06-1.411-.06-4.148s.01-3.067.06-4.148c.05-1.08.216-1.818.46-2.462a4.922 4.922 0 0 1 2.949-2.949c.644-.244 1.382-.41 2.462-.46 1.08-.05 1.411-.06 4.148-.06Zm0 1.666c-2.672 0-2.986.01-4.05.058-.98.045-1.512.208-1.866.346a3.266 3.266 0 0 0-1.198.782 3.266 3.266 0 0 0-.782 1.198c-.138.354-.301.885-.346 1.866-.048 1.064-.058 1.378-.058 4.05s.01 2.986.058 4.05c.045.98.208 1.512.346 1.866.192.494.489.915.782 1.198.283.283.704.59 1.198.782.354.138.885.301 1.866.346 1.064.048 1.378.058 4.05.058s2.986-.01 4.05-.058c.98-.045 1.512-.208 1.866-.346a3.266 3.266 0 0 0 1.198-.782 3.266 3.266 0 0 0 .782-1.198c.138-.354.301-.885.346-1.866.048-1.064.058-1.378.058-4.05s-.01-2.986-.058-4.05c-.045-.98-.208-1.512-.346-1.866a3.266 3.266 0 0 0-.782-1.198 3.266 3.266 0 0 0-1.198-.782c-.354-.138-.885-.301-1.866-.346-1.064-.048-1.378-.058-4.05-.058ZM10 4.792a5.208 5.208 0 1 0 0 10.416A5.208 5.208 0 0 0 10 4.792Zm0 1.667a3.542 3.542 0 1 1 0 7.084 3.542 3.542 0 0 1 0-7.084Zm6.406-.885a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
