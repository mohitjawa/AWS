const multer = require('multer');
const path = require("path");
const fs = require("fs");
const uploadsDirectory = path.join(path.dirname(path.dirname(__dirname)), 'uploads');
if (!fs.existsSync(uploadsDirectory)) {
  fs.mkdirSync(uploadsDirectory)
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    },
  });
  const upload = multer({ storage: storage });
  module.exports=upload