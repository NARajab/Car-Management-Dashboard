const router = require("express").Router()

const Car = require("./adminRouter")

router.use("/", Car)

module.exports = router
