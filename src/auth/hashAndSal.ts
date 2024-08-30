import { randomBytes, scrypt, scryptSync } from "crypto";

async function creathashAndSal(password : string) {
    const salPassword =  await randomBytes(16).toString("hex");
    const hashPassword =  await scryptSync(password, salPassword, 64).toString("hex");

    return {
        hashPassword,
        salPassword
    }
}

export default creathashAndSal;