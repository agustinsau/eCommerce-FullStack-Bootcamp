module.exports = (sequelize, DataTypes) => {
    let alias = "Product";

    let cols = {
        id_product:{
            type:DataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,    
        },

        product_name:{
            type:DataTypes.STRING(50), 
            allowNull: false,    
        },

        label:{
            type:DataTypes.STRING(50), 
            allowNull: false,  
        },

        product_format:{
            type:DataTypes.STRING(50), 
            allowNull: false,  
        },

        country:{
            type:DataTypes.STRING(50), 
            allowNull: false,  
        },

        released:{
            type:DataTypes.DATEONLY,
            allowNull: false,
        },

        price:{
            type:DataTypes.DECIMAL(10,2),
            allowNull: false,
        },

        genre_fk:{
            type:DataTypes.BIGINT(11).UNSIGNED,
            allowNull: false, 
        },

        artist_fk:{
            type:DataTypes.BIGINT(11).UNSIGNED,
            allowNull: false, 
        }
    };

    let config = {
        tableName: 'products',
        timestamps: false,
        underscored: true,
    };

    const Product = sequelize.define(alias, cols, config); //paso mis 3 parametros recien creados

    Product.associate = function(models){
        Product.belongsTo(models.Genre, { //belongs to es la asociacion de la tabla. Una a muchas, etc
            as: 'genre',
            foreignKey: 'genre_fk'
        });

        Product.belongsTo(models.Artist, { 
            as: 'artist',
            foreignKey: 'artist_fk'
        });
    }

    return Product;


}