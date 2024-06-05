const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");
app.use(cookieParser());

// const signUp = async (req, res) => {
//   try {
//     const { name, email, password, confirmPassword } = req.body;
//     if (password !== confirmPassword) {
//       return res.status(400).json({ error: "Passward dont match" });
//     }

//     const user = await User.findOne({ email });

//     if (user) {
//       return res.status(400).json({ error: "User already exsist" });
//     }

//     bcrypt.genSalt(10, function (err, salt) {
//       bcrypt.hash(password, salt, async function (err, hash) {
//         let createduser = await User.create({
//           name,
//           email,
//           password: hash,
//         });
//         let token = jwt.sign({ email }, "jkshdfsdfhgshdfhgdf");
//         console.log(token);
//         console.log(req.cookies);

//         res.cookie("tokenn", token,{
//           withCredentials: true,
//           httpOnly: false,
//         });
//         res.send(createduser);
//         console.log(" user creeeated ");
//       });
//     });

//     // const user = await User.findOne({ username });

//     // if (user) {
//     //   return res.status(400).json({ error: "Username already exsist" });
//     // }
//     // const newUser = new User({
//     //     fullName: fullName,
//     //     email: email,
//     //     password: password,
//     //   });

//     //   if (newUser) {
//     //     generateTokenAndSetCookie(newUser._id, res);
//     //     await newUser.save();

//     //     res.status(201).json({
//     //       _id: newUser._id,
//     //       fullName: newUser.fullName,
//     //       username: newUser.username,
//     //       profilePic: newUser.profilePic,
//     //     });
//     //   } else {
//     //     res.status(400).json({ error: "Invalid user data" });
//     //   }
//   } catch (error) {
//     console.log("Error in signup controller", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
//   //     const salt = await bcrypt.genSalt(10);
//   // const hashedPassword = await bcrypt.hash(password, salt);
// };
// module.exports = signUp;

const login = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.send("sommething wrong");

  bcrypt.compare(req.body.password, user.password, function (err, result) {
    // result == true
    console.log(result);
    res.send("logged in");
  });
};
module.exports = login;

const logout = (req, res) => {
  res.cookie("tokenn", "");
  //  res.redirect("/")
};

module.exports = logout;



// this is working with api

// const signUp = async (req, res) => {
//   try {
    
//     const { name, email, password, confirmPassword } = req.body;
//     if (password !== confirmPassword) {
//       return res.status(400).json({ error: "Passward dont match" });
//     }
    
//     const user = await User.findOne({ email });
    
//     if (user) {
//       return res.status(400).json({ error: "email already exsist" });
//     }
    
//     const createduser = await User.create({ name,email, password });
//     // res.status(400).json({ error: "Passward dont match" });
//     res.send(createduser);
//   } catch (error) {
//     res.send(error.message)
//     res.status(500).json({ error: "Internal Server Error" });

//   }

// };
// module.exports = signUp;
