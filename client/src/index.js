const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();

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

app.use(express.static(staticpath));

app.listen(8000,(req,res)=>{
    console.log("Listening to the port 8000");
});
