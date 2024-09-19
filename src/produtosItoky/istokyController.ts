import { Request, Response } from "express";
import { v4 as uuuidv4 } from "uuid";
import { IstokyPostgres } from "./istokyPostgres.js";
import { prototype } from "events";

const istokyPostgres = new IstokyPostgres()

export class IstokyController{
    constructor(){

    }
    async postIstoky(req: Request, res: Response) : Promise<void> {
        const data = req.body
        console.log(data)
        try {
            
            const novoProduto = {
                date_created: new Date(),
                ...data
            }
            console.log(novoProduto)
            const result = await istokyPostgres.postProduto(novoProduto)
            res.status(201).json({success : true, result})

        } catch (erro) {
            const errorMenssage = (erro as Error).message
            res.status(500).json({ success: false, erro: errorMenssage});
        }
    }

    async getIstoky(req: Request, res: Response) : Promise<void> {
        try {
            const result = await istokyPostgres.getProdutos();
            res.status(200).json(result)
        } catch (erro) {
            const errorMenssage = (erro as Error).message
            res.status(500).json({ success: false, erro: errorMenssage});
        }
    }

    async putIstoky(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        try {
            const result = await istokyPostgres.putProdutos(id, data)
            res.status(200).json(result)
        } catch (erro) {
            const errorMenssage = (erro as Error).message;
            res.status(500).json({ success: false, erro: errorMenssage });
        }
    }

    async deleteIstoky(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await istokyPostgres.deleteProdutos(id)
            res.status(200).json(result)
        } catch (erro) {
            const errorMenssage = (erro as Error).message;
            res.status(500).json({ success: false, erro: errorMenssage });
        }
    }
    }