const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send('Seja Bem vindo');
});
app.get('/manutencao', (req, res)=>{
//    res.send('Site em manutenção');
res.sendFile(__dirname + "/views/manutencao.html")
});

app.listen(3000);
