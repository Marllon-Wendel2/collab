import { Router } from "express";
import { Request, Response } from 'express';

const router = Router()

router.get('/', bemVindo )

async function bemVindo(req: Request, res: Response) : Promise<void> {
    try {
        res.status(200).json({ message: "Bem-vindo à API" })
    }catch (erro) {
        const errorMenssage = (erro as Error).message
        res.status(500).json({ success: false, erro: errorMenssage});
    }
}

export default router