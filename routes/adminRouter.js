const router = require("express").Router()

const adminController = require("../controllers/adminController")

const upload = require("../middlewares/uploader")

router.get("/dashboard", adminController.carsPage)
router.get("/create", adminController.createPage)
router.get("/edit/:id", adminController.editPage)
router.post(
  "/car/add",
  upload.single("image"),
  adminController.createCar
)
router.post(
  "/car/update/:id",
  upload.single("image"),
  adminController.editCar
)
router.get("/car/delete/:id", adminController.removeCar)

module.exports = router
