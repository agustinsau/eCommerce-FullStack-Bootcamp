module.exports = (sequelize, DataTypes) => {
    let alias = "Genre";

    let cols = {
        id_genre: {
            type:DataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        
        name: {
            type:DataTypes.STRING(50), 
            allowNull: false,  
        }
    }

    let config = {
        tableName: 'genres',
        timestamps: false,
        underscored: true,
    }

    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = function(models){
        Genre.hasMany(models.Product, { //hasMany to es la asociacion de la tabla. Una a muchas, etc
            as: 'product',
            foreignKey: 'genre_fk'
        });
    }

    return Genre;
}