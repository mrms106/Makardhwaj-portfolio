if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
    
    }
const express=require("express")
const path = require("path");
const methodOveride=require("method-override");
const app=express();
const controller=require("./controllers/controller");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOveride("_method"));

app.get("/",controller.main);
app.post("/home" ,controller.home);
app.listen("8080",controller.port);
