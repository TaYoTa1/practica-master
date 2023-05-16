const Router = require("express").Router
const router = Router()

const users = require("../controller/user_controller")
router.get("/users", users.GetUser)
router.post("/adduser")
router.delete("/deluser")
router.post("/upuser")

module.exports = router
