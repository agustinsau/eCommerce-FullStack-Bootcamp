const path = require('path');

const db = require('../database/models');

const Products = db.Product;
const Genres = db.Genre;
const Artists = db.Artist;

const productsController = {
    showAll: (req, res) => {
        Promise.all([
            Products.findAll(),
            Artists.findAll()
        ])
        .then(([products, artists]) => {
            res.render(path.resolve(__dirname, '..', 'views', 'index'), { products, artists });
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

    add: (req, res) => {
        Promise.all([
            Products.findAll(),
            Genres.findAll(),
            Artists.findAll()
        ])
        .then(([products, genres, artists]) => {
            res.render(path.resolve(__dirname, '..', 'views', 'productAdd'), { products, genres, artists });
        })
        .catch(err => console.log(err));    
    },

    create: function (req, res){
        Products.create(
            {
                product_name: req.body.name,
                label: req.body.label,
                product_format: req.body.format,
                country: req.body.country,
                released: req.body.released,
                price: req.body.price,
                genre_fk: req.body.genre,
                artist_fk: req.body.artist
            }
        ).then(() => {
            return res.redirect('/products')
        })
        .catch(err => console.log(err));
    },
    
};

module.exports = productsController;