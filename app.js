const express=require('express');
const app=express();
app.use((req,res,next)=>{
    res.send("eslam hegazy");
});
module.exports=app;