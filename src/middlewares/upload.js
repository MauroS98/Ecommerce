

// const { module } = require("module");
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/productos'))
    },
    filename: function (req, file, cb) {
        const formatFilename = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        cb(null, formatFilename)
    }
});

const upload = multer  ({ storage }) 
module.exports={
    upload
}