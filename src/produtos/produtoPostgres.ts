import db from "../database/index.js";
import ProdutoModel from "./produtoModel.js";

class ProdutosPostgres {
    db: any;
    constructor() {
        this.db = db
    }

    async postProduto(newProduto : ProdutoModel) : Promise <{success: boolean; message: string}> {
        try {
            if(!newProduto.id || !newProduto.user_id || !newProduto.description || !newProduto.groups_id) {
                throw new Error("Informe todos os campos do modelo")
            } else {
                await this.db.none("INSERT INTO produtos (id, user_id, groups_id, description, price_buy, price_seller) VALUES ($1, $2, $3, $4, $5, $6)", [newProduto.id, newProduto.user_id, newProduto.groups_id, newProduto.description, newProduto.price_buy, newProduto.price_seller])
            }
            return {success: true, message: "Grupos created sucessfully"}
        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage};
        }
    }

    async getProdutos() : Promise <{success: boolean; message: string}> {
        try {
            const allProdutos =  await db.manyOrNone("SELECT * FROM produtos");
            return { success: true, message: allProdutos}

        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage};
        }
    }

    async getProdutoId(id : string) {
        try {
            const produto =  await this.db.oneOrNone("SELECT * FROM produtos WHERE id = $1", id);
            return { success: true, produto}

        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage};
        }
    }

    async getListaProdutos () : Promise <{success: boolean; message: string[]}>{
        try {
            const allProdutos =  await db.manyOrNone<ProdutoModel>("SELECT * FROM produtos");
            const listaDeProdutos = allProdutos.map((produto : ProdutoModel) => produto.description)
            const listaProdutosUnicos : Array<any> = [...new Set(listaDeProdutos)];
            console.log(listaProdutosUnicos)
            return { success: true, message: listaProdutosUnicos}

        } catch (erro) {
            const errorMenssage = (erro as Error).message;
            return { success: false, message: [errorMenssage]}
        }
    }

    async putProdutos(id : string, data : ProdutoModel) : Promise <{ success: boolean, message: string }> {
        try {
            if(data.user_id) {
                await this.db.none(
                    "UPDATE produtos SET user_id = $1 WHERE id = $2",
                    [data.user_id, id]
                )
            }

            if(data.groups_id) {
                await this.db.none(
                    "UPDATE produtos SET groups_id = $1 WHERE id = $2",
                    [data.groups_id, id]
                )
            }

            if(data.description) {
                await this.db.none(
                    "UPDATE produtos SET description = $1 WHERE id = $2",
                    [data.description, id]
                )
            }

            if(data.price_buy) {
                await this.db.none(
                    "UPDATE produtos SET price_buy = $1 WHERE id = $2",
                    [data.price_buy, id]
                )
            }

            if(data.price_seller) {
                await this.db.none(
                    "UPDATE produtos SET price_seller = $1 WHERE id = $2",
                    [data.price_seller, id]
                )
            }
            return { success: true, message: "Produto updated successfully" };

        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage};
        }
    }

    async deleteProdutos(id: string) : Promise <{ success: boolean, message: string }> {
        try {
            await this.db.none(
                "DELETE FROM produtos WHERE id = $1",
                id
            )
            return { success: true, message: "Deleted sucess" }

        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage}
        }
    }
}

export default ProdutosPostgres