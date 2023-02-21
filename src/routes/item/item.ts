import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../../controllers/item";
import { logMiddleware } from "../../middleware/log";
import { RouterExpressCustom } from "../index.router";

const router = Router();
const r = RouterExpressCustom.getRoutePath(__dirname);

router.get(r, getItems);
router.get(`${r}/:id`, logMiddleware, getItem);
router.post(r, postItem);
router.put(`${r}/:id`, updateItem);
router.delete(`${r}/:id`, deleteItem);

export {router};