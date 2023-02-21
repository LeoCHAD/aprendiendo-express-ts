import { Router } from "express";
import { RouterExpressCustom } from "../index.router";
import { loginCtrl, registerCtrl }from '../../controllers/auth';

const r = RouterExpressCustom.getRoutePath(__dirname);

const router = Router();
router.post(`${r}/register`,registerCtrl);
router.post(`${r}/login`,loginCtrl);

export {router};