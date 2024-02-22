const express = require("express");
const { getCartProduct , addCartProduct, addCartProductQut, subCartProductQut, deleteCartProduct } = require("../controllers/cards/Card");
const CartProduct = require("../models/cartProduct.models");
const CardProductRoutes = express.Router();



  
  CardProductRoutes.post("/add-card-product" , addCartProduct);
  CardProductRoutes.get("/get-all-card-product" , getCartProduct );
  CardProductRoutes.put("/add-card-product-qtn" , addCartProductQut);
  CardProductRoutes.put("/sub-card-product-qtn" , subCartProductQut);
  CardProductRoutes.delete("/delete-card-product/:id" , deleteCartProduct);

  module.exports = CardProductRoutes;

  































