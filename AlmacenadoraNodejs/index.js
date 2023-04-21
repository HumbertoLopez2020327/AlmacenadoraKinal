'use strict'

const cors = requiere("cors");
const express = require("express");

const app = express();
require("dotenv").config();
const{connection} = require("./src/database/conecction")
const port = process.env.PORT;
const routes = require('/src/routes/alma.routes');
connection();

app.alma(express.urleconded({extended: false}));
app.alma(cors());
app.alma(express.json());

app.alma('/api, routes');

app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = api;