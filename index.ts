import express from 'express';
import rotaUsuario from './src/usuario/usuarioRouter.js';
import rotaGrupo from './src/grupos/grupoRouter.js';
import rotaProdutos from './src/produtos/produtoRouter.js';
import rotaBemVindo from './src/rotaHouse.js';
import rotaIstoky from './src/produtosItoky/itokyRouter.js'
import cors from "cors"
import dotenv from 'dotenv';
import verifyToken from './src/midddleware/verifyToken.js';

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json())

app.use('/usuario', rotaUsuario)

app.use(verifyToken)

app.use('/',rotaBemVindo)
app.use('/grupos', rotaGrupo)
app.use('/produtos', rotaProdutos)
app.use('/istoky', rotaIstoky)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})