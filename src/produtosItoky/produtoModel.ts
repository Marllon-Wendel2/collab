export class ProdutoIstoky {
    id: string;
    produto: string;
    description: string;
    price_buy: number;
    price_seller: number;
    dataDeValidade: Date;
    date_created: Date;
    date_retired: Date;
    localizacao: string;

    constructor(id: string, produto: string, description: string, price_buy: number, price_seller: number, dataDeValidade: Date, date_created: Date, date_retired: Date, localizacao: string) {
        this.id = id;
        this.produto = produto;
        this.description = description;
        this.price_buy = price_buy;
        this.price_seller = price_seller;
        this.dataDeValidade = dataDeValidade;
        this.date_created = date_created;
        this.date_retired = date_retired;
        this.localizacao = localizacao
    }
}