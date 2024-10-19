import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ContactModel } from "./config.js";

const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/getData",(req,res)=>{
//     res.send("ANUPAM");     
// })

app.post("/sendData",async(req,res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.tel
    };
    const userdata=await ContactModel.insertMany(data);
    console.log(userdata);
})

app.listen(5000,()=>{
    console.log("app is running");
})
