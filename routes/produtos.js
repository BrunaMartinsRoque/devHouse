const express = require("express");
const produtoController = require("../controllers/produtoController");
const routes = express.Router();

routes.get("/produtos/lista", produtoController.listarProdutos);

routes.get("/produtos/:id", (req, res) => {
  if (typeof Number(req.params.id) !== "number") {
    return res.send("Digite um número");
  }

  res.send("Página de Produtos");
});

module.exports = routes 

