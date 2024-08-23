class UsersModel {
    id: string;
    name: string;
    cpf_cnpj: string;
    email: string;
    password: string;
    data_created: Date;

    constructor(id: string, name: string, cpf_cnpj: string, email: string, password: string, data_created: Date) {
        this.id = id;
        this.name = name;
        this.cpf_cnpj = cpf_cnpj;
        this.email = email;
        this.password = password;
        this.data_created = data_created;
    }
}

export default UsersModel;