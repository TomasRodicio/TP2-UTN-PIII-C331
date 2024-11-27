/*
  > - Crear un autor
  > - Leer todos los autores
  > - Leer un autor por ID
  > - Eliminar un autor por ID
*/
const { UPDATE } = require("sequelize/lib/query-types")
const directoresModel = require("../models/directoresModel.js")

const createDirector = async (req,res)=>{
    try{
        await directoresModel.create(req.body)
        res.json("registro creado correctamente");
    }catch(error){
        res.json({message:error.message})
    }
}

const getAllDirector = async (req,res)=>{
    try {
        const director = await directoresModel.findAll()
        res.json(director)
    } catch (error) {
        res.json({message:error.message})
    }
}

const getDirectorByID = async (req,res)=>{
    try {
        const director = await directoresModel.findByPk(req.params.id)
        res.json(director)
    } catch (error) {
        res.json({message:error.message})
    }
}

const deleteDirectorByID = async (req,res)=>{
    try {
        await directoresModel.destroy({
            where:{id:req.params.id}
        })
        res.json("Registro borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports = {createDirector, getAllDirector, getDirectorByID, deleteDirectorByID}