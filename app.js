import express from "express";
import mongoose from "mongoose";

const PORT=4000;
const app= express();


await mongoose.conect( 
    "mongodb+srv://mahak:<mahak#123>@cluster0.walpehy.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log('connected to DB!'))
.catch((err)=>console.error(err));


app.get('/',(req,res)=>{
    res.send('we are on home');
});






app.listen(PORT,()=>{
    console.log("server is running at http://localhost:4000");
});