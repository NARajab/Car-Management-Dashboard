const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nama tour harus ada"],
    unique: true,
  },
  price: {
    type: Number,
    require: [true, "Harganya harus ada"],
  },
  category: {
    type: String,
    default: "small",
  },
  dateUpdated: {
    type: String,
    require: [true, "Tanggalnya harus ada"],
  },
})

const Car = mongoose.model("Car", carSchema)

module.exports = Car
