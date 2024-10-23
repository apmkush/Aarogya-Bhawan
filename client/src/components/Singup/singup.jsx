import React, { useState } from "react";
import axios, { Axios } from 'axios';

export default function Singup(){
    const [message, setMessage] = useState('');
    const [formInput,setFormInput]=useState({
        name:"",
        email:"",
        tel:"",
        password:"",
        confirm_password:"",
    });

    const handleInput=(event)=>{
        const{name,value}=event.target;

        let obj={[name]:value};

        setFormInput((prev)=>({...prev,...obj}));
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:5000/sendSingup',formInput,{
                headers:{
                    'Content-Type':'application/json'
                }
            });
            setMessage(response.data.message);
        }catch(error){
            setMessage("An error has occured!!");
        }
    };

    return (
        <form className="p-6 flex flex-col justify-center">
            <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                    Full Name
                </label>
                <input
                    onChange={handleInput}
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
            </div>

        <div className="flex flex-col mt-2">
            <label htmlFor="email" className="hidden">
                Email
            </label>
            <input
                onChange={handleInput}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
        </div>
        <div className="flex flex-col mt-2">
            <label htmlFor="tel" className="hidden">
                Number
            </label>
            <input
                onChange={handleInput}
                type="tel"
                name="tel"
                id="tel"
                placeholder="Mobile Number"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
                Password
            </label>
            <input
                onChange={handleInput}
                type="name"
                name="password"
                id="password"
                placeholder="Password"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
                Confirm_Password
            </label>
            <input
                onChange={handleInput}
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
        </div>
        {message && <p>{message}</p>}
        <button
            type="submit"
            onClick={handleSubmit}
            className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
        >
            Submit
        </button>
    </form>
    )
};

