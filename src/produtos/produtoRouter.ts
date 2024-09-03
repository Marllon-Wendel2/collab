import { Router } from "express";
import ProdutoController from "./produtoController.js";

const produtoController = new ProdutoController()

const router =  Router();

router.post('/', produtoController.postProdutos);
router.get('/', produtoController.getProdutos);
router.get('/lista',produtoController.listaProdutos )
router.get('/:id', produtoController.getProdutosId);
router.put('/:id', produtoController.putProdutos);
router.delete('/:id', produtoController.deleteProdutos);

export default router