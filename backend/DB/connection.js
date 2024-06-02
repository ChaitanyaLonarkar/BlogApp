// import mongoose from "mongoose";
const mongoose = require('mongoose');


const connectDb=async ()=>{
    try {
        // mongoose.connect(process.env.CONNECTION_URL)
        mongoose.connect('mongodb+srv://chaitanyalonarkar24:mxcFZ4hKNzrVLwym@cluster0.m7e75tr.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0')
        console.log("connect")

    } catch (error) {
        console.log("error hai ",error)
    }
}
 module.exports= connectDb;