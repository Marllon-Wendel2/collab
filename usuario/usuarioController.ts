import { Request, Response } from "express";
import { deleteUser, getUserById, getUsers, postUser, putUser } from "./service.js"
import {v4 as uuidv4} from 'uuid';

async function postUsuarios(req: Request, res: Response) {
    const data = req.body;

    try {
        const newUser = {
            id: uuidv4(),
            ...data
        };
        console.log(newUser)
       const  result =  await postUser(newUser)
        res.status(201).json(result)
    } catch (erro) {
        res.status(500).json(erro)
    }
}

async function getUsuarios(req: Request, res: Response) {
    const result = await getUsers()
    res.status(200).json(result)
}

async   function getUsuariosId(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const result = await getUserById(id)
        res.status(200).json(result)
    } catch (erro : any) {
        res.status(500).json(erro.message)
    }

    }

async function putUsuario(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    
    try {
        const result = await putUser(id, data)
        res.status(201).json(result)
    } catch (erro: any) {
        res.status(500).json(erro.message)
    }

}

async function deleteUsuario(req: Request, res: Response) {
    const { id } = req.params;
    
    try {
        const result = await deleteUser(id)
        res.status(200).json(result)
    } catch (erro: any) {
        res.status(500).json(erro.message)
    }

}

export {
    postUsuarios,
    getUsuarios,
    getUsuariosId,
    putUsuario,
    deleteUsuario
}