import { deleteUser, getUserById, getUsers, postUser, putUser } from "./serviceUser.js"
import {v4 as uuidv4} from 'uuid';
import { Request, Response } from "express";

async function postUsuarios(req : Request, res : Response) : Promise<void> {
    const data = req.body;

    try {
        const newUser = {
            id: uuidv4(),
            ...data,
            ativo: true,
            data_created: new Date()
        };
       const  result =  await postUser(newUser)
        res.status(201).json(result)
    } catch (erro) {
        const errorMenssage = (erro as Error).message
        res.status(500).json({ error: errorMenssage})
    }
}

async function getUsuarios(req : Request, res : Response) : Promise<void> {
    const result = await getUsers()
    res.status(200).json(result)
}

async   function getUsuariosId(req : Request, res : Response) : Promise<void> {
    const { id }  = req.params;
    try {
        const result = await getUserById(id)
        res.status(200).json(result)
    } catch (erro) {
        const errorMenssage = (erro as Error).message
        res.status(500).json({ error: errorMenssage})
    }

    }

async function putUsuario(req : Request, res : Response) : Promise<void>{
    const { id } = req.params;
    const data = req.body;
    
    try {
        const result = await putUser(id, data)
        res.status(201).json(result)
    } catch (erro) {
        const errorMenssage = (erro as Error).message
        res.status(500).json({ error: errorMenssage})
    }

}

async function deleteUsuario(req : Request, res : Response) : Promise<void> {
    const { id } = req.params;
    
    try {
        const result = await deleteUser(id)
        res.status(200).json(result)
    } catch (erro) {
        const errorMenssage = (erro as Error).message
        res.status(500).json({ error: errorMenssage})
    }

}

export {
    postUsuarios,
    getUsuarios,
    getUsuariosId,
    putUsuario,
    deleteUsuario
}