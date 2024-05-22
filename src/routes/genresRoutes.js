const express = require('express');
const router = express.Router();

const genresController = require("../controllers/genresController");

router.post('/genre/create', genresController.create);   //crea un nuevo genero

module.exports = router;