import { Router } from "express";
import { deleteIdGruposController, getGruposController, getIdGruposController, postGruposController, putIdGruposController } from "./grupoController.js";

const router =  Router();

router.post('/', postGruposController)
router.get('/', getGruposController)
router.get('/:id', getIdGruposController)
router.put('/:id', putIdGruposController)
router.delete('/:id', deleteIdGruposController)

export default router