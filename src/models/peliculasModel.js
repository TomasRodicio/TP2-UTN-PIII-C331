/*
{
        "id": 1,
        "title":"",
        "director": "",
        "createdAt": "",
        "updatedAt": "",
        "categorie": "",
        "status": ""
    },
*/
const db = require ("../data/db.js")
const {DataTypes} = require ("sequelize")
const directoresModel = require("./directoresModel.js")

const peliculasModel = db.define ("peliculas",{
    title : {type:DataTypes.STRING},
    directorID : {
        type:DataTypes.INTEGER,
        references:{
            model: directoresModel,
            key: 'id'
        }
    },
    categorie : {type:DataTypes.STRING},
    status : {type:DataTypes.ENUM('active', 'inactive')},
})

peliculasModel.belongsTo(directoresModel, {foreignKey: 'directorID'})
directoresModel.hasMany(peliculasModel, {foreignKey: 'directorID'})

module.exports = peliculasModel