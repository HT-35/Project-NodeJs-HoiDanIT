const multer = require("multer");

// cấu hình upload img
// Cấu hình thư mục lưu trữ file tạm thời
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public/img");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

module.exports = storage;
