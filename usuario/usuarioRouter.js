import { Router } from "express";
import { deleteUsuario, getUsuarios, getUsuariosId, postUsuarios, putUsuario } from "./usuarioController.js";

const router = Router();

router.post('/', postUsuarios);
router.get('/', getUsuarios);
router.get('/:id', getUsuariosId);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario)

export default router