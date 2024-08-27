class ProdutoModel {
    id: string;
    user_id: string;
    groups_id: string;
    description: string;
    price_buy: number;
    price_seller: number;

    constructor(id: string, user_id: string, groups_id: string, description: string, price_buy: number, price_seller: number) {
        this.id = id;
        this.user_id = user_id;
        this.groups_id = groups_id;
        this.description = description;
        this.price_buy = price_buy;
        this.price_seller = price_seller;
    }
}

export default ProdutoModel;