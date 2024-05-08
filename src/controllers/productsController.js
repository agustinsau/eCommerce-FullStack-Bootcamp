const path = require('path');

const db = require('../database/models');

const Products = db.Product;
const Genres = db.Genre;
const Artists = db.Artist;

const productsController = {
    showAll: (req, res) => {
        Promise.all([
            Products.findAll(),
            Genres.findAll(),
            Artists.findAll()
        ])
        .then(([products, genres, artists]) => {
            res.render(path.resolve(__dirname, '..', 'views', 'index'), { products, genres, artists });
        })
        .catch(err => console.log(err));
    },
    
    list: (req, res) => {
        Promise.all([
            Products.findAll(),
        ])
        .then(([products]) => {
            res.render(path.resolve(__dirname, '..', 'views', 'productsList'), { products });
        })
        .catch(err => console.log(err));
    },
    
};



module.exports = productsController;