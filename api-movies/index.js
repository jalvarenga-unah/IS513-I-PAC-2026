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

const MOVIES = [
    {
        id: 1234,
        title: "The Matrix",
        director: ["Lana Wachowski", "Lilly Wachowski"],
        posterUrl: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
        genre: ['action', 'Sci-fi']
    }
]

app.get('/movies/:movie_id', (req, res) => {

    const id = Number(req.params.movie_id) // id debe ser un numero

    if (isNaN(id) || id < 0) {
        return res.status(400).json({
            message: 'el parametro debe ser un numero'
        })
    }

    //consultar la bbdd
    const movie = MOVIES.find((movie) => {
        return movie.id === id
    })

    if (!movie) {
        res.status(404).json({
            message: 'pelicula no encontrada',
            data: null
        })
    }

    res.json({
        message: 'Obtener una pelicula por su id',
        data: movie
    })
})

app.get('/movies', (req, res) => {

    const { query } = req

    if (query.genre) {
        const filtered_movies = MOVIES.filter((movie) => {
            return movie.genre.some((genre) => genre.toLowerCase() === query.genre.toLowerCase())
        })

        return res.json({
            message: 'Obtener todas las peliculas',
            data: filtered_movies
        })

    }


    res.json({
        message: 'Obtener todas las peliculas',
        data: MOVIES
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