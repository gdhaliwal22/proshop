const express = require('express')
const products = require('./data/products')
const app = express()

app.listen(5000, console.log('Server running on port 5000'))


app.get('/', (req, res) => {
    res.send('API is run0ning')
})

app.get('/api/products', (res, res) => {
    res.json(product)
})

app.get('api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})