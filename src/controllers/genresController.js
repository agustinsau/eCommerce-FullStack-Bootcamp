const path = require('path');

const db = require('../database/models');

const Genres = db.Genre;

const genresController = {
    create: function (req, res){
        Genres.create(
            {
                name: req.body.genre_name
            }
        ).then(() => {
            return res.redirect('/products')
        })
        .catch(err => console.log(err));
    },

}

module.exports = genresController;