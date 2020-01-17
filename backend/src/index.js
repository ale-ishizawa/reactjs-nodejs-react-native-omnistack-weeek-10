const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()

//Conexão com o banco MongoDB
mongoose.connect('mongodb+srv://alessandro:semana@cluster0-4hdqu.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//Entende requisições que tem corpo no formato JSON
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3334)