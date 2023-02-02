import express, { json } from "express";
import { json as _json } from "body-parser";
import bcrypt from "bcrypt";
const app = express();
import connection from "./modules/connection";
import userRoute from "./routers/userRoute";
import messageRoute from "./routers/messageRoute";
const port = 3001
import cors from "cors";
import socket from "socket.io";
import path from 'path';
app.use(_json());
app.use(cors({ origin: "*" }));

app.use(json());
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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('../client', 'dist', 'index.html'));
  });
}