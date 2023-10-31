const express = require('express');
const routes = express.Router();
const extractController = require('../controllers/extract');

routes.post('/extract-text', extractController.extract);


module.exports = routes;