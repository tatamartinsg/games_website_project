import UserServices from '../services/user.services'
import { Request, Response } from 'express';
import UserInterface from '../services/interfaces/user.interface';

class UserController{
    public async signUpUser(req:Request, res:Response) :Promise< UserInterface | any>{
        const user: UserInterface = req.body         
        return res.json(await UserServices.singUpUser(user));
    }
    public async signInUser(req:Request, res:Response) :Promise< UserInterface | any>{
        const user: UserInterface = req.body 
        console.log(user)
        return res.json(await UserServices.singInUser(user));
    }
}

export default new UserController()