
// importar express
const express = require ("express")

// inicializar express
const app = express()

// hacer carpeta public como estatica
app.use(express.static("public"))

// creacion de rutas de los html

// envio del archivo html Home
app.get("/Home", (req, res, next) => {
    res.sendFile(__dirname + "/views/home.html")
})

// archivo About
app.get("/About", (req, res, next) => {
    res.sendFile(__dirname + "/views/about.html")
})

// archivo Works
app.get("/Works", (req, res, next) => {
    res.sendFile(__dirname + "/views/works.html")
})

// crear puerto
app.listen(3000,() => {
    console.log("corriendo en el puerto 3000")
})