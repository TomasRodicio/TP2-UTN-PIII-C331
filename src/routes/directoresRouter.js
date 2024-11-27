const express = require ("express")

const {createDirector, getAllDirector, getDirectorByID, deleteDirectorByID} = require ("../controllers/directoresControllers.js")

const router = express.Router()

router.post("/", createDirector)
router.get("/", getAllDirector)
router.get("/:id", getDirectorByID)
router.delete("/:id", deleteDirectorByID)

module.exports = router