const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()

const ctrl = require('./controller/product')

let { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    console.log('db connected')
    app.set('db', db)
    app.listen(SERVER_PORT, () => {console.log(`listening on port ${SERVER_PORT}`)})
}).catch(err => console.log(err))

app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getOne)
app.put('/api/products/:id', ctrl.update)
app.post('/api/products', ctrl.create)
app.delete('/api/products/:id', ctrl.delete)

