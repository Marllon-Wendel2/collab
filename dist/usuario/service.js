import fs from "fs";
import { User } from "../models/User.js";
let users;
try {
    const data = fs.readFileSync('./usuario.json', 'utf-8');
    users = JSON.parse(data);
}
catch (erro) {
    console.error(erro);
}
async function postUser(dto) {
    try {
        const newUser = new User(dto.id, dto.nome, dto.email, dto.document, dto.hashPass, dto.salPass, true);
        users.push(newUser);
        fs.writeFileSync('./usuario.json', JSON.stringify(users));
        return {
            success: true,
            message: "Usuario criado com sucesso"
        };
    }
    catch (erro) {
        return {
            success: false,
            message: erro.message
        };
    }
}
async function getUsers() {
    const result = await users.map((user) => {
        return new User(user.id, user.nome, user.email, user.document, user.hashPass, user.salPass);
    });
    return result;
}
async function getUserById(id) {
    try {
        const result = users.filter((user) => user.id === id);
        if (result.length === 0) {
            throw new Error('Não foi encontrado o User');
        }
        return result;
    }
    catch (erro) {
        throw erro;
    }
}
async function putUser(id, body) {
    let result = await getUserById(id);
    const userIndex = users.findIndex((user) => user.id === result.id);
    try {
        if (!body) {
            throw new Error("Insira o conteudo para ser atualizado");
        }
        if (body.nome) {
            result[0].nome = body.nome;
        }
        if (body.cpf) {
            result[0].cpf = body.cpf;
        }
        if (body.email) {
            result[0].email = body.email;
        }
        if (body.hashPass) {
            result[0].hashPass = body.hashPass;
        }
        if (body.salPass) {
            result[0].salPass = body.salPass;
        }
        users[userIndex] = result;
        fs.writeFileSync('./usuario.json', JSON.stringify(users));
        return {
            success: true,
            message: "Usuario atualizado"
        };
    }
    catch (erro) {
        return {
            success: false,
            message: erro.message
        };
    }
}
async function deleteUser(id) {
    let result = await getUserById(id);
    const userIndex = users.findIndex((user) => user.id === id);
    try {
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            fs.writeFileSync('./usuario.json', JSON.stringify(users));
            return {
                success: true,
                message: "Usuario deletado"
            };
        }
        else {
            throw new Error('Id não encontrado');
        }
    }
    catch (erro) {
        return {
            success: false,
            message: erro.message
        };
    }
}
export { postUser, getUsers, getUserById, putUser, deleteUser };
