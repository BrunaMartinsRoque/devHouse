const { Router } = require("express");
const express = require("express");

const routes = express.Router();

const produtoController = require("../controllers/produtoController");


routes.get("/", produtoController.homeRedirect);

routes.get("/home", produtoController.home);

routes.get("/manutencao", produtoController.manutencao);

routes.get("/blog", produtoController.blog);

routes.get("/contato", produtoController.contato); 

routes.get("/login", produtoController.login); 

routes.post("/receber-contato", produtoController.receberContato); 

routes.get("/depoimentos", produtoController.depoimentos);

routes.get("/cadastrar-depoimento", produtoController.exibirFormDepoimento);
routes.post("/cadastrar-depoimento", produtoController.cadastrarDepoimento);

module.exports = routes;