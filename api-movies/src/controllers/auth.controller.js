import Auth from "../service/auth"


export default class AuthController {


    static login = async (req, res) => {


        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Debe enviar los datos de inicio de sesión'
            })
        }

        try {

            const user = await Auth.login({ username })

            if (!user) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Credenciales incorrectas'
                })
            }

            //validar que la clave sea correcta
            //? INFO:

            // generar el token

            // responder al usuario


        } catch {

            return res.status(500).json({
                status: 'error',
                message: 'Error al realizar la consulta'
            })
        }
    }

}