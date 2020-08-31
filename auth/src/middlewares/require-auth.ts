import {Request,Response,NextFunction} from "express";
import {NotAuhotizedError} from "../errors/not-auhotized-error";

export const requireAuth = (req:Request, res:Response, next:NextFunction) => {
    if(!req.currentUser) {
        throw new NotAuhotizedError();
    }
    next();
}