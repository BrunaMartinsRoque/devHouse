const modelDepoimentos = require("../models/depoimentos");

const produtoController = {
  listarProdutos: (req, res) => {
    res.send("Página de Produtos");
  },

  home: (req, res) => {
    const usuario = undefined;
    res.render("home", {
      titulo: "Sua empresa vai ser incrível!!!",
      usuario
    });
  },

  homeRedirect: (req, res) => {
    res.redirect("/");
  },

  manutencao: (req, res) => {
    res.render("manutencao");
  },

  blog: (req, res) => {
    res.render("blog");
  },

  contato: (req, res) => {
    res.render("contato");
  },

  login: (req, res) => {
    res.render("login");
  },

  receberContato: (req, res) => {
    res.render("Contato recebido por:" + req.body.nome);
  },

  depoimentos: (req, res) => {
    res.render("depoimentos", {
      depoimentos: modelDepoimentos.depoimentos,
      titulo: "Depoimentos",
    });
  },

  exibirFormDepoimento: (req, res) => {
    res.render("cadastroDepoimento");
  },

  cadastrarDepoimento: (req, res) => {
    console.log(req.body);
    const {
      autor,
      titulo,
      descricao
    } = req.body;

    modelDepoimentos.cadastrarDepoimento(autor, titulo, descricao);
    return res.redirect("/depoimentos");
  },
};

module.exports = produtoController;