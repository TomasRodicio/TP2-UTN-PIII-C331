const db = require ("../data/db.js")
const {DataTypes} = require ("sequelize")

const directoresModel = db.define ("directores",{
    name : {type:DataTypes.STRING},
    surname : {type:DataTypes.STRING}
})

module.exports = directoresModel