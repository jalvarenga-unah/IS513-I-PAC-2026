// import { createserver } from 'node:http'
import express from 'express'

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

app.get('/movies', (req, res) => {
    res.json({
        message: 'Obtener todas las peliculas',
        queries: req.query
    })
})

app.get('/movies/:movie_id', (req, res) => {
    res.json({
        message: 'Obtener una pelicula por su id',
        id: req.params.movie_id,
        queries: req.query
    })
})


app.post('/movies', (req, res) => {

    //obtener los datos
    const data = req.body

    // validar que los datos sean correctos
    if (!data.title) {
        return res.status(400)
            .json(
                {
                    status: 'error',
                    message: 'El titulo es requerido'
                }
            )
    }


    // guardar los datos en la base de datos

    // responder al cliente
    res
        .status(201)
        .json({
            status: 'success',
            message: 'Pelicula creada correctamente'
        })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})