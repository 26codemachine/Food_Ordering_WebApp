import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb://localhost:27017/ChatApp01').then(()=>{
       console.log('DB connected') ;
    })
}