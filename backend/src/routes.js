const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

//Tipos de parâmetros: 
//Query Params => req.query (Filtros, ordenação, paginação)
//Route Params => request.params (Identificar um recurso na alteração ou remoção)
//Body => request.body (Dados  para criação ou alteração de um registro)

const routes = Router()

routes.post('/devs', DevController.store)
routes.get('/devs', DevController.index)
routes.get('/search', SearchController.index)

module.exports = routes