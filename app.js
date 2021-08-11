const express = require("express");
const path = require("path");
const rotasDeProdutos = require("./routes/produtos");
const rotas = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use(rotasDeProdutos);
app.use(rotas);

app.listen(3000);
