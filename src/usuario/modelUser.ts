class UsersModel {
    id: string;
    name: string;
    cpf_cnpj: string;
    email: string;
    password: string;
    salPassword: string;
    role: string;
    ativo: boolean;
    data_created: Date;
    date_deleted: Date;
    last_login: Date;

    constructor(id: string, name: string, cpf_cnpj: string, email: string, password: string, role: string, salPassword: string, ativo:boolean, data_created: Date, last_login: Date, date_deleted: Date) {
        this.id = id;
        this.name = name;
        this.cpf_cnpj = cpf_cnpj;
        this.email = email;
        this.password = password;
        this.salPassword = salPassword;
        this.role = role;
        this.ativo = ativo;
        this.data_created = data_created;
        this.last_login = last_login;
        this.date_deleted =  date_deleted;
    }
}

export default UsersModel;