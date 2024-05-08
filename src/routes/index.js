const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController");

// router.get("/", function (req, res) {
//     res.render("index", {title: "Home"});
// })


router.get('/', productsController.showAll);

module.exports = router