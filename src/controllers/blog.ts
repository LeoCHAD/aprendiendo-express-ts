import { Response, Request } from "express";
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOG')
  }
};
const getItems = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOG')
  }
};
const postItem = ({body}: Request, res: Response) => {
  try {
    console.log('jajaj');
    res.send(body)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_BLOG')
  }
};
const updateItem = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_BLOG')
  }
};
const deleteItem = (req: Request, res: Response) => {
  try { 
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_BLOG')
  }
};

export { deleteItem, getItem, getItems, postItem, updateItem };
