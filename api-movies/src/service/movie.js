import MOVIES from '../data/movies.json' with { type: 'json' }

export const getAllMovies = async ({ query } = {}) => {
    //conectarse a la base de datos
    //hacer la consutla (query)
    // retornar los resultados

    //concatenar con un where
    if (query.genre) {

        return MOVIES.filter((movie) => {

            return movie.genre.some((genre) => {
                return genre.toLowerCase() === query.genre.toLowerCase()
            })

        })
    }


    //select *from 
    return MOVIES
}