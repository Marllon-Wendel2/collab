import { scryptSync, timingSafeEqual } from "crypto";
import UsersModel from "../usuario/modelUser.js";
import { creatJwt, PayloadModel } from "./jwt.js";

async function authUser(user: UsersModel, password: string) {
    try {
        const hashTest = scryptSync(password, user.salpassword, 64)
        const hashReal =  Buffer.from(user.password, "hex")
        const result = timingSafeEqual(hashTest, hashReal)

        if(result) {
            const payload : PayloadModel = {id: user.id, name: user.name}
            const token = creatJwt(payload)
           return { success: true, message: "Usuario autorizado", token};
        } else {
            throw new Error("Usuario não autorizado")
        }
        
    } catch (erro) {
        const errorMenssage = (erro as Error).message
        return { success: false, message: errorMenssage};
    }
    
}

export {
    authUser
}