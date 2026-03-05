import MOVIES from '../data/movies.json' with { type: 'json' }
import { getAllMovies } from '../service/movie.js'

export const getAll = async (req, res) => {

    const { query } = req // server

    //TODO: capturar los errores que puedan venir de la bbdd

    //consulta a la bbdd (service/model)
    const filtered_movies = await getAllMovies({ query: { ...query } })

    res.json({
        message: 'Obtener todas las peliculas',
        data: filtered_movies
    })//server
}

export const getById = (req, res) => {

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
}

export const create = (req, res) => {

    //obtener los datos
    const data = req.body // server

    // validar que los datos sean correctos -> server
    if (!data.title) {
        return res.status(400)
            .json(
                {
                    status: 'error',
                    message: 'El titulo es requerido'
                }
            )
    }


    //TODO: guardar los datos en la base de datos
    // Service / Model

    // responder al cliente -> server
    res
        .status(201)
        .json({
            status: 'success',
            message: 'Pelicula creada correctamente'
        })
}