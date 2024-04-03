if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
    
    }
const express=require("express")
const path = require("path");
const methodOveride=require("method-override");
const app=express();
const {sendmail}=require("./mail/sendmail")
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOveride("_method"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.post("/home" ,(req,res)=>{
    try{
        const form=req.body.form;
        sendmail(form);
        console.log("sent")
        res.redirect("/");
    }catch(error){
        console.log(error);
        res.send(error,"The error occured sending your form try again ");
    }
    
})
app.listen("8080",()=>{
    console.log("running on port 8080");
});
