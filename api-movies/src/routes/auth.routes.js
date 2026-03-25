import Router from 'express'
import AuthController from '../controllers/auth.controller'

const authsRoutes = Router()


authsRoutes.post('/login', AuthController.login)

authsRoutes.post('/recover-password', (req, res) => {

})

authsRoutes.post('/change-password', (req, res) => {

})


export default authsRoutes