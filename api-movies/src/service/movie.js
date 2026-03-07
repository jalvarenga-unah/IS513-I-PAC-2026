import MOVIES from '../data/movies.json' with { type: 'json' }

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

}

