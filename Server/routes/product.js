const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");

const productController = require("../Controller/ProductController");
const controller = new productController();

// global.crypto.randomUUID()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const extName = path.extname(file.originalname);
    if (extName === ".png") {
      cb(null, `photo-${Date.now()}${path.extname(file.originalname)}`);
    } else {
      cb({ message: `invalid ext name-${extName}` }, "");
    }
  },
});
const uploads = multer({ storage: storage });

router.get("/", controller.getAllProduct);
router.get("/expensive", controller.getMaxPrice);
router.get("/", controller.getLimitProduct);
router.post("/:id", controller.saveProduct);
router.patch("/:id", controller.patchProduct);
router.put('/:id',controller.putProduct)
router.delete("/:id", controller.deleteProduct);
router.get("/", controller.getPrice);


router.post("/", uploads.single("product"), controller.saveProduct);

module.exports = router;
