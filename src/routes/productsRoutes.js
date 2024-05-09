const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get('/products', productsController.list);   //lista todos los productos disponibles

router.get('/product/add', productsController.add); //trae la informacion de la bdd para el form
router.post('/product/create', productsController.create); //crea en la bdd un nuevo producto a partir de los datos del form

//router.get("/product/detail/:id", productsController.detail);

module.exports = router;