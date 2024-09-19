import { Router } from "express";
import { authUsuarioController, deleteUsuario, getUsuarios, getUsuariosId, postUsuarios, putUsuario } from "./usuarioController.js";
import verifyToken from "../midddleware/verifyToken.js";

const router = Router();

router.post('/',postUsuarios);
router.post('/auth', authUsuarioController)
router.get('/', verifyToken,getUsuarios);
router.get('/:id', verifyToken,getUsuariosId);
router.put('/:id', verifyToken,putUsuario);
router.delete('/:id',verifyToken ,deleteUsuario)

export default router