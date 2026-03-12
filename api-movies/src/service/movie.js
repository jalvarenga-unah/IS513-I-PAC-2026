import MOVIES from '../data/movies.json' with { type: 'json' }
import { v4 as uuidv4 } from 'uuid';

export default class Movie {

    static getAll = async ({ genre, director, year } = {}) => {
        //conectarse a la base de datos
        //hacer la consutla (query)
        // retornar los resultados

        //concatenar con un where
        if (genre) {

            //throw -> genera un error generico
            // throw Error('user not found')

            return MOVIES.filter((movie) => {
                return movie.genre.some((g) => {
                    return g.toLowerCase() === genre.toLowerCase()
                })
            })
        }


        //select *from 
        return MOVIES
    }

    static find = async (id) => {
        return MOVIES.find((movie) => {
            return movie.id === id
        })
    }

    static create = async (movie) => {

        const id = uuidv4()
        const newMovie = { ...movie, id }
        MOVIES.push(newMovie)

        return newMovie
    }

    static update = async (id, movie) => { //movie = {}

        const idx = MOVIES.findIndex((movie) => movie.id === id)

        const movieUpdated = {
            ...MOVIES[idx],
            ...movie
        }

        MOVIES[idx] = movieUpdated

        return movieUpdated

    }

    static delete = async (id) => {

        const idx = MOVIES.findIndex((movie) => movie.id === id)
        MOVIES.splice(idx, 1)

    }

}

