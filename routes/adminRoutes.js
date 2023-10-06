const express = require("express")
const adminController = require("../controllers/adminController")

const router = express.Router()

router.route("/dashboard").get(adminController.carsPage)

router.route("/create").get(adminController.createPage)

router.route("/edit/:id").get(adminController.editPage)

router.route("/car/add").post(adminController.createCar)

router
  .route("/car/update/:id")
  .post(adminController.editCar)

router
  .route("/car/delete/:id")
  .get(adminController.removeCar)

module.exports = router
