const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();
const bcrypt = require("bcrypt");
const collection = require("./config")

app.use(express.json());

app.use(express.urlencoded({extended:false}));


const staticpath=path.join(__dirname,"../public");
const templatespath =path.join(__dirname,"../templates/views");

app.set("view engine","hbs");
app.set("views",templatespath);



app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/signup",(req,res)=>{
    res.render("register");
});
app.get("/ambulance",(req,res)=>{
    res.render("ambulance");
});

app.use(express.static(staticpath));

app.listen(8000,(req,res)=>{
    console.log("Listening to the port 8000");
});
   

app.post("/signup",async(req,res)=>{
    const data = {
        name:req.body.full_name,
        gender:req.body.gender,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password,
        confirm_password:req.body.confirm_password,
    }
    const existingUser = await collection.LoginModel.findOne({email: data.email});
    if(existingUser){
        res.send("User already exists.Please enter different email")
    }else{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password,saltRounds);
        data.password = hashedPassword;
        const userdata = await collection.LoginModel.insertMany(data);
        console.log(userdata);
        res.render("home"); 
    }
});

app.post("/login", async(req,res)=>{
    try{
        const check = await collection.LoginModel.findOne({email: req.body.email});
        if(!check){
            res.send("user cannot be found");
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password,check.password);
        if(isPasswordMatch){
            res.render("home");
        }else{
            req.send("wrong password");
        }
        
    }catch{
        res.send("wrong Details");
    }
});

app.post("/ambulance",async(req,res)=>{
    const data = {
        name:req.body.name,
        address:req.body.address,
        pincode:req.body.pincode,
        phone:req.body.phone,
        gender:req.body.gender,
    }

    const userdata = await collection.AmbulanceModel.insertMany(data);
        console.log(userdata);
    res.render("home");
});