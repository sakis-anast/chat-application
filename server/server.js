const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const app = express();
const connection = require("./modules/connection");
const userRoute= require("./routers/userRoute");
const messageRoute= require("./routers/messageRoute");
const port = 3001
const cors = require("cors");
const socket = require("socket.io")
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

app.use(express.json());
const server = app.listen(port,()=>
console.log("app running on port "+port));
 
app.use("/users" , userRoute)
app.use("/message" , messageRoute)


//implementing socket.io
const io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });

  global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  })

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-receive", data.message);
    }
  });
});

  
