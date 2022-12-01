const router = require("express").Router()
const controller = require("./register.controller")

router
    .route("/")
    .post(controller.register)


module.exports = router