"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsersModel = /** @class */ (function () {
    function UsersModel(id, name, cpf_cnpj, email, password, data_created) {
        this.id = id;
        this.name = name;
        this.cpf_cnpj = cpf_cnpj;
        this.email = email;
        this.password = password;
        this.data_created = data_created;
    }
    return UsersModel;
}());
exports.default = UsersModel;
