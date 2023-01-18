const User = require("../modules/userModel")
const bcrypt = require("bcrypt")
const getUser = async (req, res) => {
    try {
      const users = await User.find({})
      res.json(users);
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  };
  
  const signUp= async (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
     res.send({message: "please send correct data"})
    } else{
      const checkUsername = await User.find({username: req.body.username})
    if (checkUsername.length){
      res.send({message: "username already exist"})}
      const checkEmail = await User.find({email: req.body.email})
    if (checkEmail.length){
      res.send({message: "email already used"})}
      else{
      bcrypt.hash(req.body.password, 10 , function (err , hash) {
        const user = new User({username: req.body.username,email:req.body.email,  password : hash });
        user.save();
        res.send({message : true})
      })
        
    }}}
  ;
 const updateUser = async (req, res) => {
    await User.updateOne({_id:req.params.id}, req.body);
    res.send("updated");
  };


  const deleteUser = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.send("deleted");
    } catch (e) {
      res.status(500).send(e);
    }
  };
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
    updateUser,
    deleteUser,
    logIn
  }

  // using token with login
//   const logIn = async (req, res) => {
//     const user = await User.findOne({username: req.body.username})
// if (user){
//   bcrypt.compare(req.body.password, user.password , function (err , result) {
//     if(result){
//     const token = jwt.sign({id : user._id }, "secret" , {expiresIn:"45s"})
//     res.send({token}
//       );
//     }else{
//     res.send({message: "Wrong Password"});
//     }
//   })}
//   else {
//     res.send({message:"Wrong Username"})
//   }};

//   const verify = async (req, res) => {
//     jwt.verify(req.body.token, 'secret', async (err, decoded)=> {
//       if(err){
//         res.send(err)
//       }else{
//       const userId = decoded.id
//       const user = await User.findOne({_id : userId})
//       res.send(user) 
//     }
//     });};
