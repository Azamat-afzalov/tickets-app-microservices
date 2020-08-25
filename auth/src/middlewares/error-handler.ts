import {Response,Request,NextFunction} from "express";
import {CustomErrors} from "../errors/custom-errors";

export const errorHandler = (
    err:Error ,
    req:Request,
    res:Response ,
    next:NextFunction) => {
        if (err instanceof CustomErrors){
            return res.status(err.statusCode).send({errors : err.serializeErrors()})
        }
        return res.status(400).send({
            errors : [
                {
                    message : 'Something went wrong'
                }
            ]
        })
}