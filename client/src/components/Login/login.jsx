import React, { useState } from "react";
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
// import { decode  } from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function Login(){
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    // const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1);
    const [formInput,setFormInput]=useState({
        email:"",
        password:"",
        otp:"",
    });

    const  DisplayMessage=(text)=>{
        toast.success(text, {
            position: "top-center",
            autoClose: 3000, // Auto-close after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleLoginSuccess = (credentialResponse) => {
        const token = credentialResponse.credential;
        DisplayMessage("Login successfully!!");
        // const decodedToken = decode (token); 
        // console.log('Login Success:', decodedToken);
    };

    const handleLoginError = () => {
        console.log('Login Failed');
        DisplayMessage("Login successfully!!");
    };

    const handleInput=(event)=>{
        const{name,value}=event.target;

        let obj={[name]:value};
        setFormInput((prev)=>({...prev,...obj}));
    };
    const handleSendOtp = async (e) => {
        e.preventDefault();
        // console.log(formInput.email);
        try {
            const response = await axios.post('http://localhost:5000/send-otp', { email });
            console.log("otp sent");
            if (response.data.success) {
                setStep(2); 
            }
            DisplayMessage(response.data.message);
        } catch (error) {
            DisplayMessage('An error occurred.');
        }
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:5000/sendLogin',formInput,{
                headers:{
                    'Content-Type':'application/json'
                }
            });
            if(response.data.success){
                DisplayMessage(response.data.message);
            }else{
                DisplayMessage(response.data.message);
            }
            // setMessage(response.data.message);
        }catch(error){
            DisplayMessage("An error has occured!!");
        }
        setTimeout(() => {
            navigate('/');
        }, 3000);
    };

    return (
        <form className="p-6 flex flex-col justify-center">

        {step==1&& (<div>
            <div className="flex flex-col mt-2">
            <label htmlFor="email" className="hidden">
                Email
            </label>
            <input
                onChange={(e) => { handleInput(e); setEmail(e.target.value); }}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
                Password
            </label>
            <input
                onChange={handleInput}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
        </div>
            <button
                type="submit"
                onClick={handleSendOtp}
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
            >
                Send OTP
            </button>
        </div>
        )}
        { step==2  && ( 
            <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
                OTP
            </label>
            <input
                onChange={handleInput}
                type="text"
                name="otp"
                id="otp"
                placeholder="Enter otp sent"
                required
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <button
            type="submit"
            onClick={handleSubmit}
            className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
            >
            Verify OTP
            </button>
            </div>
        )}
        {message && <p>{message}</p>}
        <ToastContainer />
        <GoogleOAuthProvider clientId="102462336820-hq3kci8kr9mb4ofpjv48lmk7fjtvsvch.apps.googleusercontent.com">
            <div className="App">
                <h2>Login with Google</h2>
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginError}
                    useOneTap
                />
                <button onClick={() => googleLogout()}>Logout</button>
            </div>
        </GoogleOAuthProvider>
    </form>
    )
};

export default Login