const depoimentos = [ 
    {
        autor: " primeiro",
        titulo: "primeiro depoimento",
        descricao: "primeiro",
    },
    {
        autor: " primeiro",
        titulo: "primeiro depoimento",
        descricao: "primeiro",
    },
    {
        autor: " primeiro",
        titulo: "primeiro depoimento",
        descricao: "primeiro",
    },
];
function cadastrarDepoimento(autor, titulo, descricao) {
    return depoimentos.push({
      autor,
      titulo,
      descricao,
    });
  }
  module.exports = { depoimentos, cadastrarDepoimento };