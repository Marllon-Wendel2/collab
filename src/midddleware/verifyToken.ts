import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv/config';

function verifyToken(req: Request, res:  Response, next: NextFunction) {
    const token = req.headers['authorization'];

    if(!token) {
        return res.status(403).json({message: "Token não fornecido."});
    }

    jwt.verify(token, process.env.SEGREDO, (err, decoded) => {
        if(err) {
           return res.status(401).json({message: "Token inválido."})
        }
        next()
    });
};

export default verifyToken;