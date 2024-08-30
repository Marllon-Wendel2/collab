import db from "../database/index.js";
import GruposModel from "./grupoModel.js";

class GruposPostgress {
    db: any;
    constructor() {
        this.db = db
    }

    async postGrupo(newGrupo: GruposModel) : Promise <{success: boolean; message: string}> 
    {
        try {
            if(!newGrupo.id || !newGrupo.description || !newGrupo.date_created) {
                throw new Error("Informe todos os campos do modelo")
            } else {
                await this.db.none("INSERT INTO grouups (id, description, date_created) VALUES ($1, $2, $3)", [newGrupo.id, newGrupo.description, newGrupo.date_created])
            }
            return {success: true, message: "Grupos created sucessfully"}
        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage};
        }
    }

    async getGrupos() : Promise <{success: boolean; message: string}> {
        try {
            const allGrupos = await this.db.manyOrNone("SELECT * FROM grouups")
            return { success: true, message: allGrupos}

        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage};
        }
    }

    async getIdGrupos(id: string) : Promise <{ success: boolean, message: string }> {
        try {
            const grupo = await this.db.oneOrNone("SELECT * FROM grouups WHERE id = $1", id)
            if(!grupo) {
                throw new Error("Grupo não encontrado")
            }
            return { success: true, message: grupo}

        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage};
        }
    }

    async putGrupos(id: string, data: GruposModel) : Promise <{ success: boolean, message: string }> {
        try {
            if(data.description) {
                await this.db.none(
                    "UPDATE grouups SET description = $1 WHERE id = $2",
                    [data.description, id]
                )
            }

            if(data.user_id) {
                await this.db.none(
                    "UPDATE grouups SET user_id = $1 WHERE id = $2",
                    [data.user_id, id]
                )
            }

            return { success: true, message: "Grupo updated successfully" };
        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage};
        }
    }

    async deleteGrupo(id : string) {
        try {
            await this.db.none(
                "DELETE FROM grouups WHERE id = $1",
                id
            )
            return { success: true, message: "Deleted sucess" }
        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage}
        }
    }
}

export default GruposPostgress;