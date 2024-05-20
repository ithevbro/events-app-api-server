const express = require('express')
const app = express()
const PORT = 3000
const { MongoClient } = require('mongodb')

app.get('/', (req, res) => {
    res.send('hahaha')
})

app.listen(3000)