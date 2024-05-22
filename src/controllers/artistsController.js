const path = require('path');

const db = require('../database/models');

const Artists = db.Artist;

const artistsController = {
    create: function (req, res){
        Artists.create(
            {
                name: req.body.artist_name,
                bio: req.body.bio_info
            }
        ).then(() => {
            return res.redirect('/products')
        })
        .catch(err => console.log(err));
    },

}

module.exports = artistsController;