// import { createserver } from 'node:http'
import express from 'express'
import moviesRouter from './src/routes/movies.routes.js'
import { isAuth } from './src/middlewares/isAuth.js'
// const server = createserver((req, res)=>{})
const app = express()
const PORT = 3000

// middlewares

//capturar los datos que vienen en la peticion y convertirlos a formato json
// e inyectarlo en el objeto body de l a request
app.use(express.json())


//definir las rutas
app.get('/', (req, res) => {
    res.send('<h1>Hola mundo</h1>')
})

//aqui, se define el punto de entrada (endpoint) "/movies"
app.use('/movies', isAuth, moviesRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})