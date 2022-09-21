import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'David'},
        {id: 2, name: 'Bennet'},
        {id: 3, name: 'Neves'},
        {id: 4, name: 'Carvalho'}
    ])
})

app.listen(3333)