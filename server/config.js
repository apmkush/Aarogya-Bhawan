import { text } from "express";
import mongoose from "mongoose";
const connect=mongoose.connect("mongodb://localhost:27017/Arogya-Bhawan");

connect.then(()=>{
    console.log("Database connected succcessfully");
})
.catch(()=>{
    console.log("Database not connected");
});

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    }
});

const ContactModel=mongoose.model("Contact",contactSchema);
export{ContactModel};