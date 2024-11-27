const { UPDATE } = require("sequelize/lib/query-types")
const peliculasModel = require("../models/peliculasModel.js")

const createPelicula = async (req,res)=>{
    try {
        await peliculasModel.create(req.body)
        res.json("Registro creado correctamente");
    } catch (error) {
        res.json({message:error.message})
    }
}

const updatePeliculaByID = async (req,res)=>{
    try {
        await peliculasModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json("Registro actualizado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

const getAllPeliculas = async (req,res)=>{
    try {
        const peliculas = await peliculasModel.findAll()
        res.json(peliculas)
    } catch (error) {
        res.json({message:error.message})
    }
}

const getPeliculaByID = async (req,res)=>{
    try {
        const pelicula = await peliculasModel.findByPk(req.params.id)
        res.json(pelicula)
    } catch (error) {
        res.json({message:error.message})
    }
}

const deletePeliculaByID = async (req,res)=>{
    try {
        await peliculasModel.destroy({
            where:{id:req.params.id}
        })
        res.json("Registro borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports = {createPelicula, updatePeliculaByID, getAllPeliculas, getPeliculaByID, deletePeliculaByID}