const { text } = require("express");
const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/SIGNUP");

connect.then(()=>{
    console.log("Database connected successfully");
})
.catch(()=>{
    console.log("Database cannot be connected");
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    confirm_password:{
        type: String,
        required: true
    }
});



const ambulanceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    }
});

const LoginModel = mongoose.model("LOGINSIGNUP", LoginSchema);
const AmbulanceModel = mongoose.model("ambulance", ambulanceSchema);

module.exports = { LoginModel, AmbulanceModel };