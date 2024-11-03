import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import { ContactModel,UserModel} from "./config.js";

const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// OTP Verification
const otpStore ={};
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'apmkush2856@gmail.com', 
        pass: 'ptzp usjk jlag weep',  // Replace with your email password or use environment variables
    },
});
app.post('/send-otp', (req, res) => {
    const { email } = req.body;

    const otp = generateOtp();
    otpStore[email] = otp; // Store OTP in memory (use DB in real projects)

    // Send OTP to user's email
    const mailOptions = {
        from: 'apmkush2856@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Greeting from Arogya Bhawan,\nYour OTP code is ${otp}.\nPlease do not share otp with anyone`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.json({ success: false, message: 'Failed to send OTP' });
        }
        console.log('Email sent: ' + info.response);
        res.json({ success: true, message: 'OTP sent' });
    });
});

// app.post('/verify-otp', (req, res) => {
//     const { email, otp } = req.body;

//     if (otpStore[email] && otpStore[email] === otp) {
//         delete otpStore[email]; 
//         return res.json({ success: true, message: 'OTP verified successfully!' });
//     }
//     res.json({ success: false, message: 'Invalid OTP' });
// });



app.post("/sendContact",async(req,res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.tel
    };
    const userdata=await ContactModel.insertMany(data);
    console.log(userdata);
})

app.post("/sendSingup",async(req,res)=>{
    const data = {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.tel,
        password:req.body.password,
        confirm_password:req.body.confirm_password,
    };
    try{
        const existingUser = await UserModel.findOne({email: data.email});
        if(data.password!=data.confirm_password){
            res.json({success:false,message:"Passwords does not match!!"});
        }
        else if(existingUser){
            res.json({success:false,message:"User already exists.Please enter different email"});
        }else{
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(data.password,saltRounds);
            data.password = hashedPassword;
            const userdata = await UserModel.insertMany(data);
            console.log(userdata);
            res.json({success:true,message:"Singup successful!!"});
        }
    }catch(e){
        console.log(e);
        res.json({success:false,message:"Something went wrong!!"});
    }
})

app.post("/sendLogin",async(req,res)=>{

    const data={
        email:req.body.email,
        password:req.body.password,
        otp:req.body.otp,
    };
    try{
        const check = await UserModel.findOne({email:req.body.email});
        
        if(!check){
            return res.json({success:false,message:"user cannot be found"});
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password,check.password);
        if(isPasswordMatch){
            if(otpStore[data.email] && otpStore[data.email] === data.otp){
                delete otpStore[data.email]; 
                res.json({success:true,message:"Login successful!!"});
                console.log("Login successful");
            }else{
                res.json({success:false,message:"Wrong Otp!!"});
            }
        }else{
            res.json({success:false,message:"wrong password!!"});
            console.log("wrong password");
        }
    }catch(error){
        console.log(error);
        res.json({success:false,message:"wrong details"});
    }
    // console.log(data);
})

app.listen(5000,()=>{
    console.log("app is running");
})
