import fs from "fs";

let users;
try {
    const data = fs.readFileSync('./usuario.json')
    users = JSON.parse(data)
} catch (erro) {
    console.error(erro)
}

async function postUser(newUser) {
try {  
    users.push(newUser)
    fs.writeFileSync('./usuario.json', JSON.stringify(users))

   return {
    success: true,
    message: "Usuario criado com sucesso"
   }
} catch (erro) {
   
    return {
        success: false,
        message: erro.message
    };
}
}

async function getUsers() {
    return users
}

async function getUserById(id) {
    try {
        const data = fs.readFileSync('./usuario.json')
        users = JSON.parse(data)
        const result = await users.filter((user) => user.id === id)
        return result;
    } catch (erro) {
        throw erro
    }
}

async function putUser(id, body) {
    let result = await getUserById(id)
    const userIndex = users.findIndex( user => user.id === result.id)
    console.log(body)
    console.log(userIndex)

    try {
        if(!body) {
            throw new Error("Insira o conteudo para ser atualizado")
        }
        if(body.nome) {
            result[0].nome = body.nome
        }
        if(body.cpf){
            result[0].cpf = body.cpf
        }
        if(body.email) {
            result[0].email = body.email
        }
        if(body.hashPass) {
            result[0].hashPass = body.hashPass
        }
        if(body.salPass) {
            result[0].salPass = body.salPass
        }

        users[userIndex] = result
        fs.writeFileSync('./usuario.json', JSON.stringify(users))

        return {
            success: true,
            message: "Usuario atualizado"
        };
    } catch (erro) {
        return {
            success: false,
            message: erro.message
        };
    }

    }

async function deleteUser(id) {
    let result = await getUserById(id)
    console.log(result)
    const userIndex = users.findIndex( user => user.id === id)
    console.log(userIndex)
    
    try {
        if(userIndex !== -1) {
            users.splice(userIndex, 1)
            fs.writeFileSync('./usuario.json', JSON.stringify(users))
            return {
                success: true,
                message: "Usuario deletado"
            };
        } else {
            throw new Error('Id não encontrado')
        }
    } catch (erro) {
        return {
            success: false,
            message: erro.message
        };
    }
    
}

export {
    postUser,
    getUsers,
    getUserById,
    putUser,
    deleteUser
}