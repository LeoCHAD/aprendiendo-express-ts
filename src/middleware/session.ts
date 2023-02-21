import { NextFunction, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction)=>{
  
  try {
    const jwtuser = req.headers.authorization || '';
    const jwt = jwtuser.split(' ').pop();
    const isUser = verifyToken(`${jwt}`);
    if(!isUser){
      res.status(401);
      res.send('NO CUENTA CON UNA SESION VALIDA')
    }else{
      req.user = isUser as RequestExt;
      next();
    }
  } catch (error) {
    console.log('ja error de middleware')
    res.status(400);
    res.send('SESION NO VALIDA')
  }
}

export {checkJwt}