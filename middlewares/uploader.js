const multer = require("multer")

const multerFilter = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true)
  } else {
    return cb("Just the image format")
  }
}

const upload = multer({
  fileFilter: multerFilter,
})

module.exports = upload
