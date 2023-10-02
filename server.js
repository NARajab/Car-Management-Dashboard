const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")

const app = require("./app")

const port = process.env.PORT
const database = process.env.DATABASE_URI

mongoose
  .connect(database, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database is connected...."))
  .catch((err) => err)

app.listen(port, () => {
  console.log(`App running on PORT ${port}....`)
})
