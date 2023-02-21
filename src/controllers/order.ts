import { Response, Request } from "express";
import { handleHttp } from "../utils/error.handle";


const getItems = async (req: Request, res: Response) => {
  try {
    res.send({
      data: 'ESTO SOLO LO VEN PERSONAS CON SESION ACTIVA'
    })
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
};

export { getItems};
