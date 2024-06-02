const User=require ("../models/userModel.js");

 const signUp=async (req, res)=>{
    try {
        const { fullName, email, password, confirmPassword, } = req.body;

        const user = await User.findOne({ username });

        if (user) {
          return res.status(400).json({ error: "Username already exsist" });
        }
        const newUser = new User({
            fullName: fullName,
            username: username,
            password: hashedPassword,
            gender: gender,
            profilePic: gender === "male" ? girlProfilePic : boyProfilePic,
          });
      
          if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
      
            res.status(201).json({
              _id: newUser._id,
              fullName: newUser.fullName,
              username: newUser.username,
              profilePic: newUser.profilePic,
            });
          } else {
            res.status(400).json({ error: "Invalid user data" });
          }
        } catch (error) {
          console.log("Error in signup controller", error.message);
          res.status(500).json({ error: "Internal Server Error" });
        }
    //     const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
}
module.exports= signUp;
