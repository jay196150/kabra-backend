const express = require("express");
const { addProduct , getProduct } = require("../controllers/products/Product");
const ProductRoutes = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Upload/Product/'); // Uploads will be stored in the 'uploads' folder
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  ProductRoutes.post("/add-product" , upload.single("image") , addProduct);
  ProductRoutes.get("/get-all-product" , getProduct );

  module.exports = ProductRoutes;

  































