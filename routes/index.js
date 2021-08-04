const express = require("express");
const path = require("path");
const routes = express.Router();
const depoimentos = require ("../models/depoimentos");

routes.get("/", (req, res) => {
  const usuario = undefined;
  res.render("home", { titulo: "Sua empresa vai ser incrível!!!", usuario });
});
routes.get("/home", (req, res) => {
  res.redirect("/");
});
routes.get("/manutencao", (req, res) => {
  res.render("manutencao");
});
routes.get("/blog", (req, res) => {
  res.render("blog");
});
routes.get("/contato", (req, res) => {
  res.render("contato");
});
routes.post("/receber-contato", (req, res) => {
  res.render("Contato recebido por:" + req.body.nome);
});
routes.get("/depoimentos", (req, res) => {
  res.render("depoimentos", { depoimentos, titulo: "Depoimentos" });
});

module.exports = routes;