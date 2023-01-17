const userController = require("../controllers/userController")
const router = require("express").Router()

router.get("/" , userController.getUser)
router.post("/signup" , userController.signUp)
router.put("/:id" , userController.updateUser)
router.delete("/:id" , userController.deleteUser)
router.post("/login" , userController.logIn)


module.exports = router;
