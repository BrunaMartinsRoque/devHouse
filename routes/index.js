const express = require("express");
const path = require("path");
const routes = express.Router();
const depoimentos = require ("../models/depoimentos");
const produtoController = require("../controllers/produtoController");


routes.get("/", produtoController.home);

routes.get("/home", produtoController.home);

routes.get("/manutencao", produtoController.manutencao);

routes.get("/blog", produtoController.blog);

routes.get("/contato", produtoController.contato); 

routes.post("/receber-contato", produtoController.receberContato); 

routes.get("/depoimentos", produtoController.depoimentos);


module.exports = routes;
module.exports = produtoController;