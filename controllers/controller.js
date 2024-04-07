const {sendmail}=require("../mail/sendmail")

module.exports.main=(req,res)=>{
    res.render("home.ejs");
}

module.exports.home=(req,res)=>{
    try{
        const form=req.body.form;
        sendmail(form);
        console.log("sent")
        res.redirect("/");
    }catch(error){
        console.log(error);
        res.send(error,"The error occured sending your form try again ");
    }
    
}
module.exports.port=()=>{
    console.log("running on port 8080");
}