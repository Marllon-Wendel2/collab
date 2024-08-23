import UsersModel from "./modelUser.js";
import { UsuarioPostgres } from "./usuarioPostegres.js";

const usuarioPostgres = new UsuarioPostgres

async function postUser(newUser : UsersModel) {
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
    } catch (erro : unknown){
        let errorMessage;

        if(erro instanceof Error) {
            errorMessage = erro.message
        }
        return {
            success: false,
            message: errorMessage
        };
    }
}


async function getUserById(id : string) {
    try {
        const result = await usuarioPostgres.findUsersById(id)
        return result;
    } catch (erro) {
        throw erro
    }
}

async function putUser(id : string, body : UsersModel) {
        const result = await usuarioPostgres.updateUser(id, body);
        return result

    }

async function deleteUser(id : string) {   
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