const Car = require("../models/adminsModel")

const carsPage = async (req, res) => {
  try {
    const { category, name } = req.query

    const condition = {}

    if (category) {
      condition.category = { $eq: category }
    }

    if (name) {
      condition.name = {
        $regex: new RegExp(name, "i"),
      }
    }

    const cars = await Car.find().where(condition)

    res.render("index.ejs", {
      cars,
      message: req.flash("message", ""),
      fullUrl: category
        ? `http://localhost:3000/?category=${category}`
        : "http://localhost:3000/",
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

const createCar = async (req, res) => {
  console.log(`create req.body:`)
  console.log(req.body)

  try {
    let data = {
      ...req.body,
      dateUpdated: req.date,
    }
    await Car.create(data)
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
    const car = await Car.findById(req.params.id)
    res.render("edit.ejs", {
      car,
    })
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    })
  }
}

const editCar = async (req, res) => {
  try {
    const id = req.params.id
    const data = {
      ...req.body,
      dateUpdated: req.date,
    }
    await Car.findByIdAndUpdate(id, data, {
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
    await Car.findByIdAndRemove(id)
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
  carsPage,
  createPage,
  createCar,
  editPage,
  editCar,
  removeCar,
}
