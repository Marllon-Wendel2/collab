class UsersModel {
    id;
    name;
    cpf_cnpj;
    email;
    password;
    data_created;
    constructor(id, name, cpf_cnpj, email, password, data_created) {
        this.id = id;
        this.name = name;
        this.cpf_cnpj = cpf_cnpj;
        this.email = email;
        this.password = password;
        this.data_created = data_created;
    }
}
export default UsersModel;
