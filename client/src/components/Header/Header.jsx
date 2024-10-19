import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import hospitalLogo from './hospital.png'; // Adjust the import path based on your folder structure

export default function Header() {
    return (
        <header className="w-full shadow-lg bg-white sticky top-0 z-50 py-4">
            <nav className="w-full px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto">
                    {/* Logo and Hospital Name on the Left */}
                    <div className="flex items-center space-x-3">
                        <img
                            src={hospitalLogo}
                            className="h-12"
                            alt="Hospital Logo"
                        />
                        <span className="text-2xl font-bold text-blue-600">
                            Aarogya Bhawan
                        </span>
                    </div>

                    {/* Menu Links (Hidden on Small Screens, Visible on Larger Screens) */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8 ml-auto">
                        <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-medium">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 ${isActive ? "text-blue-600" : "text-gray-700"} hover:bg-gray-100 lg:hover:bg-transparent border-b-2 border-transparent hover:border-blue-600 transition duration-200`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 ${isActive ? "text-blue-600" : "text-gray-700"} hover:bg-gray-100 lg:hover:bg-transparent border-b-2 border-transparent hover:border-blue-600 transition duration-200`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 ${isActive ? "text-blue-600" : "text-gray-700"} hover:bg-gray-100 lg:hover:bg-transparent border-b-2 border-transparent hover:border-blue-600 transition duration-200`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/department"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 ${isActive ? "text-blue-600" : "text-gray-700"} hover:bg-gray-100 lg:hover:bg-transparent border-b-2 border-transparent hover:border-blue-600 transition duration-200`
                                    }
                                >
                                    Department
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 ${isActive ? "text-blue-600" : "text-gray-700"} hover:bg-gray-100 lg:hover:bg-transparent border-b-2 border-transparent hover:border-blue-600 transition duration-200`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Login Button (Responsive, Always Visible) */}
                    <div className="flex items-center lg:ml-8">
                        <NavLink
                            to="/login"
                            className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition duration-200"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}
