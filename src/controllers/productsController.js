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
            return res.render(path.resolve(__dirname, '..', 'views', 'index'), { products, artists, title: "Home" });
        })
        .catch(err => console.log(err));
    },
    
    list: (req, res) => {
        Promise.all([
            Products.findAll(),
        ])
        .then(([products]) => {
            return res.render(path.resolve(__dirname, '..', 'views', 'productsList'), { products, title: "Listado de Productos" });
        })
        .catch(err => console.log(err));
    },

    detail: (req, res) => { 
        Products.findByPk(req.params.id, {
            include: ['genre', 'artist'] //incluyo las tablas relacionadas con sus alias
        })
        .then(product => {
            console.log(product.product_name)
            return res.render(path.resolve(__dirname, '..', 'views', 'productDetail'), { product, title: "Detalle del Producto" })
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
            return res.render(path.resolve(__dirname, '..', 'views', 'productAdd'), { products, genres, artists, title: "Agregar Producto" });
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
            return res.render(path.resolve(__dirname, '..', 'views', 'productUpdate'), { product, genres, artists, title: "Modificar Producto" });
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
            return res.redirect('/product/detail/'+ req.params.id) //retorno a la vista del producto recien editado
        })
        .catch(err => console.log(err));
    }, 

    delete: (req, res) => {
        Products.findByPk(req.params.id)
        .then(product => {
           return res.render(path.resolve(__dirname, '..', 'views', 'productDelete'), { product, title: "Eliminar Producto" })
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