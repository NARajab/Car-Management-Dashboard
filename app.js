const express = require("express")
const morgan = require("morgan")
const flash = require("connect-flash")
const session = require("express-session")

const app = express()

const router = require("./routes/index")

app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))

app.use(express.static(`${__dirname}/public`))

app.set("views", `${__dirname}` + "/views")
app.set("view engine", " ejs")

app.use(
  session({
    secret: "geekcforgeeks",
    saveUninitialized: true,
    resave: true,
  })
)
app.use(flash())

app.use((req, res, next) => {
  req.requestTime = new Date()
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  req.date = `${req.requestTime.getHours()}:${req.requestTime.getMinutes()}, ${req.requestTime.getDate()} ${
    months[req.requestTime.getMonth()]
  } ${req.requestTime.getFullYear()}`

  next()
})

app.use(router)

module.exports = app
