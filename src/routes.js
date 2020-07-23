const { Router } = require('express');
const routes = Router();
const AnimalController = require('./app/controllers/AnimalController');

routes.get('/animals', AnimalController.index);
routes.get('/animals/:id', AnimalController.show);
routes.post('/animals', AnimalController.store);
routes.put('/animals/:id', AnimalController.update);
routes.delete('/animals/:id', AnimalController.delete);


module.exports = routes;