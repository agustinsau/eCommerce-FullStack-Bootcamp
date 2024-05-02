module.exports = (sequelize, DataTypes) => {
    let alias = "Artist";

    let cols = {
        id_artist: {
            type:DataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        
        name: {
            type:DataTypes.STRING(50), 
            allowNull: false,  
        },

        bio: {
            type:DataTypes.STRING(50), 
            allowNull: false,  
        }
    }

    let config = {
        timestamps: true,
        createAt: 'created_at',
        updateAt: 'updated_at',
        deletedAt: false
    }

    const Artist = sequelize.define(alias, cols, config);

    Artist.associate = function(models){
        Artist.hasMany(models.Product, { //hasMany to es la asociacion de la tabla. Una a muchas, etc
            as: 'product',
            foreignKey: 'artist_fk'
        });
    }

    return Artist;
}