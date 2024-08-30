import db  from "../database/index.js";
import UsersModel from "./modelUser.js";

export class UsuarioPostgres {
    db: any;
    constructor() {
        this.db = db
    }

    async postUser(newUser : UsersModel) : Promise <{success: boolean; message: string }> {
        try {
            if(!newUser.id || !newUser.name || !newUser.cpf_cnpj || !newUser.email || !newUser.password || !newUser.data_created) {
                throw new Error("Body incompleto")
            } else {
                await this.db.none("INSERT INTO users(id, name, cpf_cnpj, email, password, salPassword, date_created, role, ativo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [newUser.id, newUser.name, newUser.cpf_cnpj, newUser.email, newUser.password, newUser.salPassword, newUser.data_created, newUser.role, newUser.ativo]);
            }
            return {success: true, message: "User created sucessfully"}
        } catch (erro) {
                const errorMenssage = (erro as Error).message
                return {success: false, message: errorMenssage}
        }
    }
    async findUsers() {
        const storeUsers = await this.db.manyOrNone("SELECT * FROM users")
        if(storeUsers) {
            return storeUsers;
        } else {
            throw new Error('Usuarios não encontrados')
        }
    }
    async findUsersById(id : string) {
        const storeUser = await this.db.oneOrNone("SELECT * FROM users WHERE id = $1", id)
        if(storeUser) {
            return storeUser;
        } else {
            throw new Error('Usuario não encontrado')
        }
    }

    async updateUser(id: string, data: UsersModel) {
        try {
            if(data.name){
                await this.db.none(
                    "UPDATE users SET name = $1 WHERE id = $2",
                    [data.name, id]
            )}
            if(data.cpf_cnpj){
                await this.db.none(
                    "UPDATE users SET cpf_cnpj = $1 WHERE id = $2",
                    [data.cpf_cnpj, id]
                )}
            if(data.email){
                await this.db.none(
                    "UPDATE users SET email = $1 WHERE id = $2",
                    [data.email, id]
                )}
            if(data.password){
                await this.db.none(
                    "UPDATE users SET password = $1 WHERE id = $2",
                    [data.password, id]
                )}

            if(data.role) {
                await this.db.none(
                    "UPDATE users SET role = $1 WHERE id = $2",
                    [data.role, id]
                )
            }
            if(data.last_login) {
                await this.db.none(
                    "UPDATE users SET last_login = $1 WHERE id = $2",
                    [data.last_login, id]
                )
            }
            if(data.date_deleted) {
                await this.db.none(
                    "UPDATE users SET date_deleted = $1 WHERE id = $2",
                    [data.data_created, id]
                )
            }
            if(data.ativo) {
                await this.db.none(
                    "UPDATE users SET ativo = $1 WHERE id = $2",
                    [data.ativo, id]
                )
            }

            return { success: true, message: "User updated successfully" };
        } catch (erro) {
            const errorMenssage =  (erro as Error).message
            return { success: false, message: errorMenssage }
        }
    }

    async deleteUser(id: string) {
        try {
            await this.db.none(
                "DELETE FROM users WHERE ID = $1",
                id
            )

            return { success: true, message: "Deletad sucess" }
        } catch (erro) {
            const errorMenssage =  (erro as Error).message
            return { success: false, message: errorMenssage }
        }
    }
}