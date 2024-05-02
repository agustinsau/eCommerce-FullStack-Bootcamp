const path = require('path');

const db = require('../database/models');
const Products = db.Products;
const Genres = db.Genres;
const Artists = db.Artists;

const productsController = {
    showAll: (req, res) => {
        let allProducts = Products.findAll();
        Promise.all([allProducts])
            .then(() => {
                res.render(path.resolve(__dirname, '..', 'views', 'index'), { allProducts }) //path de la carpeta views
        })
        .catch(err => console.log(err))
    },
}