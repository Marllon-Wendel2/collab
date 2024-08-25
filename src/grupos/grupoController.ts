import { Request, Response } from "express";
import GruposPostgress from "./grupoPostgres.js";
import { v4 as uuidv4 } from "uuid";

const grupoPostgress =  new GruposPostgress()


async function postGruposController(req:Request, res: Response) : Promise<void> {
    const data = req.body

    try {
        const newGrupo = {
            id: uuidv4(),
            ...data,
            date_created: new Date()
        }
        const result = await grupoPostgress.postGrupo(newGrupo)
        res.status(201).json(result)

    } catch (erro) {
        const errorMenssage = (erro as Error).message
        res.status(500).json({ success: false, error: errorMenssage })
    }
}

async function getGruposController(req:Request, res: Response) : Promise<void>  {
    try {
        const result = await grupoPostgress.getGrupos();
        res.status(201).json(result);

    } catch (erro) {
        const errorMenssage = (erro as Error).message;
        res.status(500).json({ success: false, error: errorMenssage });
    }
}
async function getIdGruposController(req: Request, res: Response) : Promise<void> {
    const { id }  = req.params;
    try {
        const result = await grupoPostgress.getIdGrupos(id);
        res.status(200).json(result);

    } catch(erro) {
        const errorMenssage = (erro as Error).message;
        res.status(500).json({ success: false, erro: errorMenssage });
    }
}

async function putIdGruposController(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    try {
        const result = await grupoPostgress.putGrupos(id, data)
        res.status(201).json(result)
    } catch (erro) {
        const errorMenssage = (erro as Error).message;
        res.status(500).json({ success: false, erro: errorMenssage });
    }
}

async function deleteIdGruposController(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const result = await grupoPostgress.deleteGrupo(id);
        res.status(201).json(result);
    } catch (erro) {
        const errorMenssage = (erro as Error).message;
        res.status(500).json({ success: false, erro: errorMenssage })
    }
}

export {
    postGruposController,
    getGruposController,
    getIdGruposController,
    putIdGruposController,
    deleteIdGruposController
}