import { UsuarioPostgres } from "./usuarioPostegres.js";
const usuarioPostgres = new UsuarioPostgres;
async function postUser(newUser) {
    console.log(newUser);
    const result = await usuarioPostgres.postUser(newUser);
    return result;
}
async function getUsers() {
    try {
        const result = await usuarioPostgres.findUsers();
        return {
            success: true,
            result
        };
    }
    catch (erro) {
        let errorMessage;
        if (erro instanceof Error) {
            errorMessage = erro.message;
        }
        return {
            success: false,
            message: errorMessage
        };
    }
}
async function getUserById(id) {
    try {
        const result = await usuarioPostgres.findUsersById(id);
        return result;
    }
    catch (erro) {
        throw erro;
    }
}
async function putUser(id, body) {
    const result = await usuarioPostgres.updateUser(id, body);
    return result;
}
async function deleteUser(id) {
    const result = await usuarioPostgres.deleteUser(id);
    return result;
}
export { postUser, getUsers, getUserById, putUser, deleteUser };
