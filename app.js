const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const rotasDeProdutos = require("./routes/produtos");
const rotasDeUsuarios = require("./routes/usuariosRotas");
const rotas = require("./routes/index");

const { append } = require("vary");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.use(methodOverride("_method"));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));



app.use(rotasDeProdutos);
app.use(rotasDeUsuarios);
app.use(rotas);

app.listen(3000);
