import fs from "fs";
import { UsuarioPostgres } from "./usuarioPostegres.js";

let users;
const usuarioPostgres = new UsuarioPostgres
try {
    const data = fs.readFileSync('./usuario.json')
    users = JSON.parse(data)
} catch (erro) {
    console.error(erro)
}

async function postUser(newUser) {
    console.log(newUser)
    const result = await usuarioPostgres.postUser(newUser)
    return result

}

async function getUsers() {
    try {
        const result = await usuarioPostgres.findUsers()
        return {
            success: true,
            result
        }
    } catch (erro){
        return {
            success: false,
            message: erro.message
        };
    }
}


async function getUserById(id) {
    try {
        const result = await usuarioPostgres.findUsersById(id)
        return result;
    } catch (erro) {
        throw erro
    }
}

async function putUser(id, body) {
        const result = await usuarioPostgres.updateUser(id, body);
        return result

    }

async function deleteUser(id) {   
    const result = await usuarioPostgres.deleteUser(id)
    return result
}

export {
    postUser,
    getUsers,
    getUserById,
    putUser,
    deleteUser
}