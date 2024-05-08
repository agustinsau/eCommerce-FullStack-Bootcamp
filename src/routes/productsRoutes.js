const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get('/products', productsController.list);
//router.get("/product/detail/:id", productsController.detail);

module.exports = router;