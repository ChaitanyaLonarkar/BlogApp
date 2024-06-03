const express = require("express");
const cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");

const app = express();
const signUp = require("./controllers/authControllers");

const connectDb = require("./DB/connection.js");
const router = express.Router();
const authRouter = require("./routes/authRoute.js");

const login=require("./controllers/authControllers")
const logout=require("./controllers/authControllers")

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  // res.cookie("name", "chaitanya");
  // var token = jwt.sign({ foo: "bar" }, "shhhhh");
  // console.log(token);
  // res.cookie("token", token);

  res.send("hello nbhbhghghgworld");
});

app.get("/read", (req, res) => {
  // res.cookie("name", "chaitanya");
  console.log(req.cookies);
  res.send("read page hello world");
});
// app.get("/signup",(req, res) => {
 

//   req.send("hello world sing");
// } );

app.post("/signup", signUp);

app.post("/login", login);
app.post("/logout", logout);


// app.use("/auth/", authRouter);

// router.post("/login", loginUser);
// router.post("/signup", signUp());
// router.post("/logout", logOut);
app.listen(3000, () => {
  connectDb();
  console.log(`working on 3000`);
});

// mxcFZ4hKNzrVLwym
// chaitanyalonarkar24
// mongodb+srv://chaitanyalonarkar24:mxcFZ4hKNzrVLwym@cluster0.m7e75tr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
