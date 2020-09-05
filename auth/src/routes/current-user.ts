import express,{Response,Request} from 'express';
import {currentUser} from "../middlewares/current-user";

const router = express.Router()

router.get('/api/users/currentuser', currentUser, (req:Request, res:Response) => {
    console.log('Current user',req.currentUser);
    res.send({currentUser : req.currentUser || null});
})

export {router as currentUserRouter};