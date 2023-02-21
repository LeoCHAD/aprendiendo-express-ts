import { Response, Request } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const registerCtrl = async ({body}: Request, res: Response)=>{
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginCtrl = async({body}: Request, res: Response)=>{
  const {email, password} = body;
  const credentials = {email, password}
  const responseUser = await loginUser(credentials);
  res.send(responseUser);
}

export {registerCtrl, loginCtrl} 