const express = require('express')

const signUp=require("../controllers/authControllers")
const Login=require("../controllers/authControllers")
const logout=require("../controllers/authControllers");
const router = express.Router();


router.post("/signup", signUp);
router.post("/login", Login);
router.post("/logout", logout);

module.exports=router;