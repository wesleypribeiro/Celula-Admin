const express = require('express');
const routes = express.Router();
const MembrosController = require('./controllers/membrosController.js');

routes.get('/membros/', MembrosController.showAll);
routes.post('/membros/', MembrosController.create);
routes.put('/membros/:id', MembrosController.update);
routes.get('/membros/:id', MembrosController.find);
routes.delete('/membros/:id', MembrosController.delete);
routes.get('/inactive/', MembrosController.showInactive);
routes.put('/inactive/setActive/:id', MembrosController.setActive);
routes.put('/inactive/setInactive/:id', MembrosController.setInactive);

module.exports = routes;