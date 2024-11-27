const express = require ("express")
const port = 3030
const app = express()
const cors = require ("cors")
const peliculasRouter = require ("./routes/peliculasRouter.js")
const directoresRouter = require ("./routes/directoresRouter.js")

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Api peliculas")
})

app.use("/peliculas", peliculasRouter)
app.use("/directores", directoresRouter)

const conexionDB = async()=>{
    try {
        await db.authenticate()
        console.log("Conectado a la base de datos");
        
    } catch (error) {
        console.log(error);
    }
}

app.listen(port,()=>{
    conexionDB()
    console.log(`Servidor OK en el puerto ${port}`);
    
})
