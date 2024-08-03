import { deleteUser, getUserById, getUsers, postUser, putUser } from "./service.js";
import { v4 as uuidv4 } from 'uuid';
async function postUsuarios(req, res) {
    const data = req.body;
    try {
        const newUser = {
            id: uuidv4(),
            ...data
        };
        console.log(newUser);
        const result = await postUser(newUser);
        res.status(201).json(result);
    }
    catch (erro) {
        res.status(500).json(erro);
    }
}
async function getUsuarios(req, res) {
    const result = await getUsers();
    res.status(200).json(result);
}
async function getUsuariosId(req, res) {
    const { id } = req.params;
    try {
        const result = await getUserById(id);
        res.status(200).json(result);
    }
    catch (erro) {
        res.status(500).json(erro.message);
    }
}
async function putUsuario(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
        const result = await putUser(id, data);
        res.status(201).json(result);
    }
    catch (erro) {
        res.status(500).json(erro.message);
    }
}
async function deleteUsuario(req, res) {
    const { id } = req.params;
    try {
        const result = await deleteUser(id);
        res.status(200).json(result);
    }
    catch (erro) {
        res.status(500).json(erro.message);
    }
}
export { postUsuarios, getUsuarios, getUsuariosId, putUsuario, deleteUsuario };
