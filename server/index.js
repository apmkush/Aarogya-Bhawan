import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import { ContactModel,UserModel} from "./config.js";

const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/getData",(req,res)=>{
//     res.send("ANUPAM");     
// })

app.post("/sendContact",async(req,res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.tel
    };
    const userdata=await ContactModel.insertMany(data);
    console.log(userdata);
})

app.post("/sendLogin",async(req,res)=>{
    const data={
        email:req.body.email,
        password:req.body.password,
    };
    try{
        const check = await UserModel.findOne({email: req.body.email});
        
        if(!check){
            return res.json({message:"user cannot be found"});
            // console.log("user cannot be found");
        }
        // else{
        //     console.log("user found");
        //     console.log(check.password);
        // }
        // const isPasswordMatch = await bcrypt.compare(req.body.password,check.password);
        if(check.password==req.body.password){
            // res.render("home");
            res.json({message:"Login successful!!"});
            console.log("Login successful");
        }else{
            res.json({message:"wrong password!!"});
            console.log("wrong password");
        }
        
    }catch{
        res.json({message:"wrong details"});
    }
    console.log(data);
})


app.listen(5000,()=>{
    console.log("app is running");
})
