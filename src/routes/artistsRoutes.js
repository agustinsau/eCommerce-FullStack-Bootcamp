const express = require('express');
const router = express.Router();

const artistsController = require("../controllers/artistsController");

router.post('/artist/create', artistsController.create);   //crea un nuevo artista

module.exports = router;