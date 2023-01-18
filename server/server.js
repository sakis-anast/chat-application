const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const app = express();
const connection = require("./modules/connection");
const userRoute= require("./routers/userRoute");
const messageRoute= require("./routers/messageRoute");
const port = 3001
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

app.use(express.json());
app.listen(port,()=>
console.log("app running on port "+port));
 
app.use("/users" , userRoute)
app.use("/message" , messageRoute)