const express = require("express")
const adminController = require("../controllers/adminController")

const router = express.Router()

router.route("/dashboard").get(adminController.toursPage)

router.route("/create").get(adminController.createPage)

router.route("/edit/:id").get(adminController.editPage)

router.route("/admin/add").post(adminController.createTour)

router
  .route("/admin/update/:id")
  .post(adminController.editTour)

router
  .route("/admin/delete/:id")
  .post(adminController.removeCar)

module.exports = router
