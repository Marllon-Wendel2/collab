import db from "../database/index.js";
export class UsuarioPostgres {
    db;
    constructor() {
        this.db = db;
    }
    async postUser(newUser) {
        try {
            if (!newUser.id || !newUser.name || !newUser.cpf_cnpj || !newUser.email || !newUser.password || !newUser.data_created) {
                throw new Error("Body incompleto");
            }
            else {
                await this.db.none("INSERT INTO users(id, name, cpf_cnpj, email, password, date_created) VALUES ($1, $2, $3, $4, $5, $6)", [newUser.id, newUser.name, newUser.cpf_cnpj, newUser.email, newUser.password, newUser.data_created]);
            }
            return { success: true, message: "User created sucessfully" };
        }
        catch (erro) {
            const errorMenssage = erro.message;
            return { success: false, message: errorMenssage };
        }
    }
    async findUsers() {
        const storeUsers = await this.db.manyOrNone("SELECT * FROM users");
        if (storeUsers) {
            return storeUsers;
        }
        else {
            throw new Error('Usuarios não encontrados');
        }
    }
    async findUsersById(id) {
        const storeUser = await this.db.oneOrNone("SELECT * FROM users WHERE id = $1", id);
        if (storeUser) {
            return storeUser;
        }
        else {
            throw new Error('Usuario não encontrado');
        }
    }
    async updateUser(id, data) {
        try {
            if (data.name)
                await this.db.none("UPDATE users SET name = $1 WHERE id = $2", [data.name, id]);
            if (data.cpf_cnpj)
                await this.db.none("UPDATE users SET cpf_cnpj = $1 WHERE id = $2", [data.cpf_cnpj, id]);
            if (data.email)
                await this.db.none("UPDATE users SET email = $1 WHERE id = $2", [data.email, id]);
            if (data.password)
                await this.db.none("UPDATE users SET password = $1 WHERE id = $2", [data.password, id]);
            return { success: true, message: "User updated successfully" };
        }
        catch (erro) {
            const errorMenssage = erro.message;
            return { success: false, message: errorMenssage };
        }
    }
    async deleteUser(id) {
        try {
            await this.db.none("DELETE FROM users WHERE ID = $1", id);
            return { success: true, message: "Deletad sucess" };
        }
        catch (erro) {
            const errorMenssage = erro.message;
            return { success: false, message: errorMenssage };
        }
    }
}
