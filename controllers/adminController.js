const Admin = require("../models/adminsModel")

const toursPage = async (req, res) => {
  try {
    const fullUrl =
      req.protocol +
      "://" +
      req.get("host") +
      req.originalUrl
    const admins = await Admin.find()
    res.render("index.ejs", {
      admins,
      message: req.flash("message", ""),
      fullUrl: fullUrl,
    })
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    })
  }
}

const createPage = async (req, res) => {
  try {
    res.render("create.ejs")
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    })
  }
}

const createTour = async (req, res) => {
  try {
    await Admin.create(req.body)
    req.flash("message", "Ditambah")
    res.redirect("/dashboard")
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    })
  }
}

const editPage = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id)
    res.render("edit.ejs", {
      admin,
    })
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    })
  }
}

const editTour = async (req, res) => {
  try {
    const id = req.params.id
    await Admin.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    req.flash("message", "Diupdate")
    res.redirect("/dashboard")
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    })
  }
}

const removeCar = async (req, res) => {
  try {
    const id = req.params.id
    await Admin.findByIdAndRemove(id)
    req.flash("message", "Dihapus")
    res.redirect("/dashboard")
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    })
  }
}

module.exports = {
  toursPage,
  createPage,
  createTour,
  editPage,
  editTour,
  removeCar,
}
