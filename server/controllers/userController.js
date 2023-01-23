const User = require("../modules/userModel")
const bcrypt = require("bcrypt")

//getting all users emails - usernames-ids except of the user that is using the  app
const getUser = async (req, res) => {
    try {
      const users = await User.find({ _id: { $ne: req.params.id } }).select([
        "email",
        "username",
        "_id",
      ]);
      res.json(users);
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  };
  // signup and save username , hashed password and email
  const signUp= async (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
     res.send({message: "please send correct data"})
    } else{
      const checkUsername = await User.find({username: req.body.username})
    if (checkUsername.length){
      res.send({message: "username already exist"})}
      else{
      bcrypt.hash(req.body.password, 10 , function (err , hash) {
        const user = new User({username: req.body.username,email:req.body.email,  password : hash });
        user.save();
        res.send({message : true , user})
      })
        
    }}};
  //login and authenticate the password
  const logIn = async (req, res) => {
    const user = await User.findOne({username: req.body.username})
if (user){
  bcrypt.compare(req.body.password, user.password , function (err , result) {
    if(result){
    res.send({message: true,
    user}
      );
    }else{
    res.send({message: "Wrong Password"});
    }
  })}
  else {
    res.send({message:"Wrong Username"})
  }};
  module.exports = {
    getUser,
    signUp,
    logIn
  }


  
