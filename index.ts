import express from 'express';
import rotaUsuario from './src/usuario/usuarioRouter.js'
import rotaGrupo from './src/grupos/grupoRouter.js'

const app = express();

app.use(express.json())
app.use('/usuario', rotaUsuario)
app.use('/grupos', rotaGrupo)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})