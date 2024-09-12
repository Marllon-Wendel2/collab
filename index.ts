import express from 'express';
import rotaUsuario from './src/usuario/usuarioRouter.js';
import rotaGrupo from './src/grupos/grupoRouter.js';
import rotaProdutos from './src/produtos/produtoRouter.js';
import rotaBemVindo from './src/rotaHouse.js';
import cors from "cors"
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json())
app.use('/', rotaBemVindo)
app.use('/usuario', rotaUsuario)
app.use('/grupos', rotaGrupo)
app.use('/produtos', rotaProdutos)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})