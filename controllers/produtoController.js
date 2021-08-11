const produtoController = {
    listarProdutos: (req, res) => {
        res.send("Página de Produtos");
      },

    usuario:  (req, res) => {
        const usuario = undefined;
        res.render("home", { titulo: "Sua empresa vai ser incrível!!!", usuario });
      },

    home: (req, res) => {
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

    receberContato: (req, res) => {
        res.render("Contato recebido por:" + req.body.nome);
      }, 

    depoimentos: (req, res) => {
        res.render("depoimentos", { depoimentos, titulo: "Depoimentos" });
      },
};

module.exports = produtoController;