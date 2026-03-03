
import { Router } from 'express'
import { getAll, getById, create } from '../controllers/movie.controller.js'

const moviesRouter = Router()

//definición de rutas Hijas
moviesRouter.get('/', getAll)
moviesRouter.get('/:movie_id', getById)
moviesRouter.post('/', create)


export default moviesRouter