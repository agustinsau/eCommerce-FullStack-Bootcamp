const path = require('path');

const db = require('../database/models');

const Product = db.Product;
const Genre = db.Genre;
const Artist = db.Artist;

const productsController = {
    showAll: (req, res) => {
        Promise.all([
            Product.findAll(),
            Genre.findAll(),
            Artist.findAll()
        ])
        .then(([products, genres, artists]) => {
            res.render(path.resolve(__dirname, '..', 'views', 'index'), { products, genres, artists });
        })
        .catch(err => console.log(err));
    }
};

module.exports = productsController;