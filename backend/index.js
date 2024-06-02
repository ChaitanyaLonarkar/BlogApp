const express = require('express')
const app = express()
const connectDb= require("./DB/connection.js");

// const mongoose = require('mongoose');
// mongoose.connect('');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(5000, () => {
    connectDb();
    console.log(`working on 5000`);
  });

// mxcFZ4hKNzrVLwym 
// chaitanyalonarkar24
// mongodb+srv://chaitanyalonarkar24:mxcFZ4hKNzrVLwym@cluster0.m7e75tr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0