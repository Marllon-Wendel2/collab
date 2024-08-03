import express from 'express';
import rotaUsuario from './usuario/usuarioRouter.js';
const app = express();
app.use(express.json());
app.use('/usuario', rotaUsuario);
const port = 8000;
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
