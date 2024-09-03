import { deleteUser, getUserById, getUsers, postUser, putUser } from "./serviceUser.js"
import {v4 as uuidv4} from 'uuid';
import { Request, Response } from "express";
import creathashAndSal from "../auth/hashAndSal.js";
import { authUser } from "../auth/auth.js";
import { UsuarioPostgres } from "./usuarioPostegres.js";

const usuarioPostegres = new UsuarioPostgres()

async function postUsuarios(req : Request, res : Response) : Promise<void> {
    const {name, cpf_cnpj, email, role} = req.body;
    const {password} = req.body

    try {
       const {hashPassword, salPassword} = await creathashAndSal(password)

        const newUser = {
            id: uuidv4(),
            name,
            cpf_cnpj,
            email,
            password: hashPassword,
            salPassword: salPassword,
            role,
            ativo: true,
            data_created: new Date(),
            date_deleted: new Date(),
            last_login: new Date()
        };
       const  result =  await usuarioPostegres.postUser(newUser)
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
        const result = await usuarioPostegres.findUsersById(id)
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
        const result = await usuarioPostegres.updateUser(id, data)
        res.status(201).json(result)
    } catch (erro) {
        const errorMenssage = (erro as Error).message
        res.status(500).json({ error: errorMenssage})
    }

}

async function deleteUsuario(req : Request, res : Response) : Promise<void> {
    const { id } = req.params;
    
    try {
        const result = await usuarioPostegres.deleteUser(id)
        res.status(200).json(result)
    } catch (erro) {
        const errorMenssage = (erro as Error).message
        res.status(500).json({ error: errorMenssage})
    }

}

async function authUsuarioController(req: Request, res: Response) : Promise <void> {
    const { email } = req.body;
    const { password } = req.body;
     try {
        const user = await usuarioPostegres.findUsersByEmail(email);
        const result = await authUser(user, password)
        res.status(200).json(result);
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
    deleteUsuario,
    authUsuarioController
}