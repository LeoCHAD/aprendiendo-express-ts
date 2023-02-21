import { Response, Request } from "express";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";
import { handleHttp } from "../utils/error.handle";

const getItem = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const response = await getCar(id);
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
};
const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    const data = response ?? {data: 'NOT_FOUND'};
    res.send(data);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
};
const postItem = async ({body}: Request, res: Response) => {
  try {
    const a = await insertCar(body)
    res.send(a)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEMS')
  }
};
const updateItem = async ({params, body}: Request, res: Response) => {
  try {
    const responseUpdate = await updateCar(params.id, body);
    res.send(responseUpdate);
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_ITEMS')
  }
};
const deleteItem = async (req: Request, res: Response) => {
  try { 
    const {id} = req.params;
    const response = await deleteCar(id);
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEMS')
  }
};

export { deleteItem, getItem, getItems, postItem, updateItem };
