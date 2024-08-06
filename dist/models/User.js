import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export class User {
    constructor(id, nome, email, document, hashPass, salPass, posting) {
        if (posting) {
            this.validatePost(nome, email, document, hashPass, salPass);
        }
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.document = document;
        this.hashPass = hashPass;
        this.salPass = salPass;
    }
    validatePost(nome, email, document, hashPass, salPass) {
        if (!nome) {
            throw new Error(`É preciso informar o nome`);
        }
        ;
        if (!email) {
            throw new Error(`É preciso informar o email`);
        }
        ;
        if (!document) {
            throw new Error(`É preciso informar CPF ou CNPJ`);
        }
        if (!hashPass) {
            throw new Error(`Informe uma senha valida`);
        }
        ;
        if (!salPass) {
            throw new Error(`Informe uma senha valida`);
        }
    }
}
