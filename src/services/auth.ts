import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bscrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({email,password, name}: User)=>{
  const checkIs = await UserModel.findOne({email});
  if(checkIs)return 'ALREADY_EXIST'
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    name, 
    password: passHash, 
    email
  });
  return registerNewUser;
}

const loginUser = async ({email, password}: Auth)=>{
  const checkIs = await UserModel.findOne({email});
  if(!checkIs)return 'USER_NOT_FOUND'

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);
  
  if(!isCorrect) return 'PASSWORD_INCORRECT'
  
  const token = await generateToken(checkIs.email);

  return {user: checkIs, token};

}

export {registerNewUser, loginUser}