const { Router } = require("express");
const express = require("express");

const routes = express.Router();

const produtoController = require("../controllers/produtoController");
const produtosController = require("../controllers/produtos");


routes.get("/", produtoController.home);

routes.get("/home", produtoController.homeRedirect);

routes.get("/manutencao", produtoController.manutencao);

routes.get("/blog", produtoController.blog);

routes.get("/contato", produtoController.contato); 

routes.get("/login", produtoController.login); 

routes.post("/receber-contato", produtoController.receberContato); 

routes.get("/depoimentos", produtoController.depoimentos);

routes.get("/produtosite", produtoController.produtosite);

routes.get("/cadastrar-depoimento", produtoController.exibirFormDepoimento);
routes.post("/cadastrar-depoimento", produtoController.cadastrarDepoimento);



module.exports = routes;