const messageController = require ("../controllers/messageController")
const router = require("express").Router()

router.post("/get" , messageController.getMessage)
router.post("/" , messageController.postMessage)


module.exports =  router;
