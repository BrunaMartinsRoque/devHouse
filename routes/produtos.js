const express = require("express");

const routes = express.Router();

routes.get("/produtos/lista", (req, res) => {
  res.send("Página de Produtos");
});

routes.get("/produto/:id", (req, res) => {
  if (typeof Number(req.params.id) !== "number") {
    return res.send("Digite um número");
  }

  res.send("Página de Produtos");
});

module.exports = routes;