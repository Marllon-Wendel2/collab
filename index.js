"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var usuarioRouter_1 = require("./src/usuario/usuarioRouter");
var app = express();
app.use(express.json());
app.use('/usuario', usuarioRouter_1.default);
var port = 8000;
app.listen(port, function () {
    console.log("Escutando a porta ".concat(port));
});
