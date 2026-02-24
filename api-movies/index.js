// import { createserver } from 'node:http'
import express from 'express'

// const server = createserver((req, res)=>{})
const app = express()
const PORT = 3000

//definir las rutas
app.get('/', (req, res) => {
    res.send('<h1>Hola mundo</h1>')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})