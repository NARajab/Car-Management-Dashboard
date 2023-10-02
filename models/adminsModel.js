const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
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
})

const Admin = mongoose.model("Tour", adminSchema)

module.exports = Admin
