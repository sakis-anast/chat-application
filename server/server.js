const express = require("express")
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const app = express();
// const connection = require("./modules/connection");
const userRoute= require("./routers/userRoute");
const messageRoute= require("./routers/messageRoute");
const port = 3001
const cors = require("cors");
const socket = require("socket.io")
const path = require('path');
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());

 
app.use("/users" , userRoute)
app.use("/message" , messageRoute)







app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message || 'Internal Server Error.';

  return res.status(status).json({ message, stack: error.stack });
});

mongoose.set('strictQuery', false);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('../client', 'dist', 'index.html'));
  });
}

// Connection to database:
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mondoDB_Api);
    console.log('Successfully connected to MongoDB.');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
//implementing socket.io
// const io = socket(server, {
//     cors: {
//       origin: "http://localhost:3000",
//       credentials: true,
//     },
//   });

//   global.onlineUsers = new Map();
// io.on("connection", (socket) => {
//   global.chatSocket = socket;
//   socket.on("add-user", (userId) => {
//     onlineUsers.set(userId, socket.id);
//   })

//   socket.on("send-msg", (data) => {
//     const sendUserSocket = onlineUsers.get(data.to);
//     if (sendUserSocket) {
//       socket.to(sendUserSocket).emit("msg-receive", data.message);
//     }
//   });
// });

