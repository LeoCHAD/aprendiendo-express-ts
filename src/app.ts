import "dotenv/config";
import cors from "cors";
import express from "express";
import db from './config/mongo';
import { RouterExpressCustom } from './routes/index.router';

const PORT = process.env.PORT || 3001;
const app = express();
const routerP = new RouterExpressCustom(app);

app.use(cors());
app.use(express.json());

//levantamiento de las rutas
routerP.setUp('src/routes').then(()=>console.log('rutas establecidas'));

//conexion a base de datos
db()
.then(()=>{console.log("conexion correcta mongo")})
.catch((er)=>{console.error('conexión fallida mongo')})

//levantamiento de servidor
app.listen(PORT, () => console.log("listo por el puerto " + PORT));
