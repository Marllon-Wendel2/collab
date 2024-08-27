import { Request, Response } from "express";
import { v4 as uuuidv4 } from "uuid";
import ProdutosPostgres from "./produtoPostgres.js";

const produtoPostgres = new ProdutosPostgres()

class ProdutoController {
    async postProdutos(req: Request, res: Response) : Promise<void> {
        const data = req.body

        try {
            const novoProduto = {
                id: uuuidv4(),
                ...data
            }
            const result = await produtoPostgres.postProduto(novoProduto)
            res.status(201).json({success : true, result})

        } catch (erro) {
            const errorMenssage = (erro as Error).message
            res.status(500).json({ success: false, erro: errorMenssage});
        }
    }

    async getProdutos(req: Request, res: Response) : Promise<void> {
        try {
            const result = await produtoPostgres.getProdutos();
            res.status(200).json(result)
        } catch(erro) {
            const errorMenssage = (erro as Error).message;
            res.status(500).json({ success: false, erro: errorMenssage });
        }
    }

    async getProdutosId(req: Request, res: Response) : Promise<void> {
        const { id } = req.params
        try {
            const result = await produtoPostgres.getProdutoId(id);
            res.status(200).json(result)
        } catch(erro) {
            const errorMenssage = (erro as Error).message;
            res.status(500).json({ success: false, erro: errorMenssage });
        }
    }

    async putProdutos(req: Request, res: Response) : Promise <void> {
        const { id } = req.params;
        const data = req.body;
        try {
            const result = await produtoPostgres.putProdutos(id, data)
            res.status(200).json(result)
        } catch (erro) {
            const errorMenssage = (erro as Error).message;
            res.status(500).json({ success: false, erro: errorMenssage });
        }
    }

    async deleteProdutos(req: Request, res: Response) : Promise <void> {
        const { id } = req.params;

        try {
            const result = await produtoPostgres.deleteProdutos(id);
            res.status(201).json(result);

        } catch (erro) {
            const errorMenssage = (erro as Error).message;
            res.status(500).json({ success: false, erro: errorMenssage })
        }
    }
}

export default ProdutoController;