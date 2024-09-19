import db from "../database/index.js";
import { ProdutoIstoky } from "./produtoModel.js";

export class IstokyPostgres {
    db: any
    constructor(){
        this.db = db
    }

    async postProduto(newProduto : ProdutoIstoky) : Promise <{success: boolean; message: string}> {
        try {
            if(!newProduto.id || !newProduto.description || !newProduto.dataDeValidade ) {
                throw new Error("Informe todos os campos do modelo")
            } else {
                await this.db.none("INSERT INTO produtoitoky (id, produto, description, price_buy, price_seller, dataDeValidade, date_created, localizacao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [newProduto.id, newProduto.produto, newProduto.description, newProduto.price_buy, newProduto.price_seller, new Date(newProduto.dataDeValidade), newProduto.date_created, newProduto.localizacao])
            }
            return {success: true, message: "Grupos created sucessfully"}
        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage};
        }
    }

    async getProdutos() {
        try {
            const allProdutos =  await db.manyOrNone("SELECT * FROM produtoitoky");
            return { success: true, message: allProdutos}
        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage}
        }
    }

    async putProdutos(id : string, data: ProdutoIstoky) : Promise <{success: boolean; message: string}> {
        try {
            if(data.produto) {
                await this.db.none(
                    "UPDATE produtoitoky SET produto = $1 WHERE id = $2",
                    [data.produto, id]
                )
                return { success: true, message: "Produto alterado com sucesso"}
            }

            if(data.localizacao) {
                await this.db.none(
                    "UPDATE produtoitoky SET localizacao = $1 WHERE id = $2",
                    [data.localizacao, id]
                )
                return { success: true, message: "Localização alterado com sucesso"}
            }

            if(data.description) {
                await this.db.none(
                    "UPDATE produtoitoky SET description = $1 WHERE id = $2",
                    [data.description, id]
            )
            return { success: true, message: "Preço de compra alterado com sucesso"}
            }

            if(data.price_buy) {
                await this.db.none(
                        "UPDATE produtoitoky SET price_buy = $1 WHERE id = $2",
                        [data.price_buy, id]
                )
                return { success: true, message: "Preço de compra alterado com sucesso"}
            }

            if(data.price_seller) {
                await this.db.none(
                        "UPDATE produtoitoky SET price_seller = $1 WHERE id = $2",
                        [data.price_seller, id]
                )
                return { success: true, message: "Preço de venda alterado com sucesso"}
            }

            if(data.dataDeValidade) {
                await this.db.none(
                        "UPDATE produtoitoky SET dataDeValidade = $1 WHERE id = $2",
                        [data.dataDeValidade, id]
                )
                return { success: true, message: "Data de validade alterada com sucesso"}
            }
            throw new Error("Informe o que deseja editar!")
        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage}
        }
    }

    async deleteProdutos(id: string) {
        try {
            await this.db.none(
                "DELETE FROM produtoitoky WHERE id = $1",
                id
            )
            return { success: true, message: "Deleted sucess" }
        } catch (erro) {
            const errorMenssage = (erro as Error).message
            return { success: false, message: errorMenssage}
        }
    }
}