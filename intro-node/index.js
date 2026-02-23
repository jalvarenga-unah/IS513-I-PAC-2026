import { createServer } from 'node:http'

// la instancia del servidor
const server = createServer((req, res) => {
    res.write('Hola mundo')
    res.end()
})

// definir un puerto
const PORT = 3000 // 1- 65535

// empezar a escuchar el puerto
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})