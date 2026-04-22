const express = require ("express");
const cors = require ("cors");
const bodyParser=require("body-parser");

const app= express();
const Port = 5001;




//rotas produto - create 

app.get("/teste",(req, res) => {
    res.send("seja, bem-vindo ao teste ")
})

app.listen(Port,() => {
    console.log(`servidor rodando na porta, ${Port}`)
        
})

