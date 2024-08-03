 export class User {
    id: string;
    nome: string;
    email: string;
    document: string;
    hashPass: string;
    salPass: string;

    constructor(        
        id: string,
        nome: string,
        email: string,
        document: string,
        hashPass: string,
        salPass: string,
        posting?: boolean ) {
    if(posting) {
            this.validatePost(nome, email, document, hashPass, salPass) }

        this.id = id;
        this.nome = nome;
        this.email = email;
        this.document = document;
        this.hashPass =  hashPass;
        this.salPass = salPass;
    }

  validatePost(nome: string, email: string, document: string, hashPass: string, salPass: string) {
        if(!nome) {
            throw new Error(`É preciso informar o nome`)
        };
        if(!email) {
            throw new Error(`É preciso informar o email`)
        };
        if(!document) {
            throw new Error(`É preciso informar CPF ou CNPJ`)
        }
        if(!hashPass) {
            throw new Error(`Informe uma senha valida`)
        };
        if(!salPass) {
            throw new Error(`Informe uma senha valida`)
        }
    }
 }