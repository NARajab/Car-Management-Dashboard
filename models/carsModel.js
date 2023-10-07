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
  imageUrl: {
    type: String,
    default:
      "https://tse2.mm.bing.net/th?id=OIP.U2iQ7wNK6ZzTW_traW_-PQHaHa&pid=Api&P=0&h=180",
  },
})

const Admin = mongoose.model("Admin", carSchema)

module.exports = Admin
