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
            return res.render(path.resolve(__dirname, '..', 'views', 'index'), { products, artists });
        })
        .catch(err => console.log(err));
    },
    
    list: (req, res) => {
        Promise.all([
            Products.findAll(),
        ])
        .then(([products]) => {
            return res.render(path.resolve(__dirname, '..', 'views', 'productsList'), { products });
        })
        .catch(err => console.log(err));
    },

    detail: (req, res) => {  
        Products.findByPk(req.params.id, {
            include: ['genre', 'artist'] //incluyo las tablas relacionadas con sus alias
        })
        .then(product => {
            return res.render(path.resolve(__dirname, '..', 'views', 'productDetail'), { product })
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
            return res.render(path.resolve(__dirname, '..', 'views', 'productAdd'), { products, genres, artists });
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

    edit: function (req, res){
        Promise.all([
            Products.findByPk(req.params.id),
            Genres.findAll(),
            Artists.findAll()
        ])
        .then(([product, genres, artists]) => {
            return res.render(path.resolve(__dirname, '..', 'views', 'productUpdate'), { product, genres, artists });
        })
        .catch(err => console.log(err));
    },

    update: (req, res) => {
        Products.update({
            product_name: req.body.name,
            label: req.body.label,
            product_format: req.body.format,
            country: req.body.country,
            released: req.body.released,
            price: req.body.price,
            genre_fk: req.body.genre,
            artist_fk: req.body.artist
        },
        {
            where: { id_product: req.params.id }
        }
        ).then(() => {
            return res.redirect('/products')
        })
        .catch(err => console.log(err));
    }, 

    delete: (req, res) => {
        Products.findByPk(req.params.id)
        .then(product => {
           return res.render(path.resolve(__dirname, '..', 'views', 'productDelete'), { product })
        })
        .catch(err => console.log(err));
    },

    destroy: (req, res) => {
        Products.destroy({
            where: { id_product: req.params.id }})
        .then(() => {
            return res.redirect('/products')
        })
        .catch(err => console.log(err));
    }

};

module.exports = productsController;