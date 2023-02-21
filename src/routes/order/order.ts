import { Router } from "express";
import { RouterExpressCustom } from "../index.router";
import { getItems } from "../../controllers/order";
import { checkJwt } from "../../middleware/session";

/**
 * esta ruta solo puede ser accedida con sesion activa
 */
const router = Router();
const r = RouterExpressCustom.getRoutePath(__dirname);

router.get(r, checkJwt, getItems);

export {router};