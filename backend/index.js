const express = require('express')
const app = express()
const { logOut, loginUser, signUp } =require("./controllers/authControllers.js");
const connectDb= require("./DB/connection.js");

app.get('/', (req, res) => {
  res.send('hello world')
})
const router = express.Router();

// router.post("/login", loginUser);
router.post("/signup", signUp);
// router.post("/logout", logOut);
app.listen(5000, () => {
    connectDb();
    console.log(`working on 5000`);
  });

// mxcFZ4hKNzrVLwym 
// chaitanyalonarkar24
// mongodb+srv://chaitanyalonarkar24:mxcFZ4hKNzrVLwym@cluster0.m7e75tr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0