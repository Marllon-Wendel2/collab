import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

class PayloadModel {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id
        this.name = id
    }
}

function creatJwt(payload : PayloadModel) {
    const secretKey : string = process.env.SEGREDO || "";
    const token = jwt.sign(payload, secretKey, {
        expiresIn: 86400
    })

    return token 
}

export {
    creatJwt,
    PayloadModel
}