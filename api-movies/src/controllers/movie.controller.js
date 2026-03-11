import Movie from '../service/movie.js'
import { validateMovieSchema } from '../schemas/movie.schema.js'


export const getAll = async (req, res) => {

    const { query } = req // server

    //TODO: capturar los errores que puedan venir de la bbdd
    const dataFilter = {}

    if (query.genre) dataFilter.genre = query.genre
    if (query.director) dataFilter.director = query.director
    if (query.year) dataFilter.year = query.year

    //consulta a la bbdd (service/model)
    try {

        const filtered_movies = await Movie.getAll(dataFilter)

        res.json({
            message: 'Obtener todas las peliculas',
            data: filtered_movies
        })//server

    } catch (e) {
        return res.status(500).json({
            message: 'Error al consultar la base de datos: ' + e.message,
            data: null
        })
    }

}

export const getById = async (req, res) => {

    const id = Number(req.params.movie_id) // id debe ser un numero

    if (isNaN(id) || id < 0) {
        return res.status(400).json({
            message: 'el parametro debe ser un numero'
        })
    }

    //consultar la bbdd
    // const movie = MOVIES.find((movie) => {
    //     return movie.id === id
    // })

    //desde el servicio
    const movie = await Movie.find(id)

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

export const create = async (req, res) => {

    //obtener los datos
    const body = req.body // server

    // validar que los datos sean correctos -> server
    const { success, data, error, errors } = validateMovieSchema(body)

    if (!success) {
        res.status(400).json({
            status: 'error',
            message: 'verifique la información enviada',
            errors: errors?.error?.issues || JSON.parse(error.message)
        })
    }


    //TODO: guardar los datos en la base de datos
    // Service / Model
    const newMovie = await Movie.create(data)


    // responder al cliente -> server
    res
        .status(201)
        .json({
            status: 'success',
            message: 'Pelicula creada correctamente',
            data: newMovie
        })
}