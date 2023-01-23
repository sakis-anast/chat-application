const userController = require("../controllers/userController")
const router = require("express").Router()

router.get("/:id" , userController.getUser)
router.post("/signup" , userController.signUp)
router.post("/login" , userController.logIn)


module.exports = router;
