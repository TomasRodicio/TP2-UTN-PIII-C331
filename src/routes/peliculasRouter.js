const express = require("express")

const {createPelicula, updatePeliculaByID, getAllPeliculas, getPeliculaByID, deletePeliculaByID} = require("../controllers/peliculasControllers.js")

const router = express.Router()

router.post("/", createPelicula)
router.put("/:id", updatePeliculaByID)
router.get("/", getAllPeliculas)
router.get("/:id", getPeliculaByID)
router.delete("/:id", deletePeliculaByID)

module.exports = router