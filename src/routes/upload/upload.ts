import { Request, Response, Router } from "express";
import { RouterExpressCustom } from "../index.router";
import { getFile } from "../../controllers/upload";
import multerMiddlerware from '../../middleware/file';
import { checkJwt } from "../../middleware/session";

/**
 * esta ruta solo puede ser accedida con sesion activa
 */
const router = Router(); 
const r = RouterExpressCustom.getRoutePath(__dirname);

router.post(r, checkJwt, multerMiddlerware.single('myfile'), getFile);
//multerMiddlerware.single('myfile')
//(req: Request, res: Response)=>console.log('hola')
export {router};