const messageController = require ("../controllers/messageController")
const router = require("express").Router()

router.get("/" , messageController.getMessage)
router.post("/" , messageController.postMessage)
router.put("/:id" , messageController.updateMessage)
router.delete("/:id" , messageController.deleteMessage)


module.exports =  router;
