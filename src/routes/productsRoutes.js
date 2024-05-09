const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get('/products', productsController.list);   //lista todos los productos disponibles

router.get("/product/detail/:id", productsController.detail); //obtiene el detalle de un producto mediante su id

router.get('/product/add', productsController.add); //trae la informacion de la bdd para usar en el form
router.post('/product/create', productsController.create); //crea en la bdd un nuevo producto a partir de los datos del form



module.exports = router;