const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('Destination function is running'); // Log when this function is executed
    cb(null, 'uploads/images');
  },
  filename: function (req, file, cb) {
    console.log('Filename function ran'); 
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  },
});

module.exports = multer({ storage });
