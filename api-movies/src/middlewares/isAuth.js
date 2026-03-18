

export const isAuth = (req, res, next) => {
    //verificar si quien accede al recurso está autenticado

    const { authorization } = req.headers // Bearer ey1243.3242341.12rfrd423

    if (!authorization) {
        return res.json({
            status: 'error',
            "message": "acceso denegado"
        })
    }

    next()// permite el paso a la siguente parte del ciclo de vida de la peticion

    //cerrando la conexion en este punto



}