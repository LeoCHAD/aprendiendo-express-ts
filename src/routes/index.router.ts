import { Application, Router } from "express";
import fs from "fs";
import path from "path";

/**
 *Clase encargadad de administrar las rutas
 @member Router
 @member app: Application
 @method setUp
 @static getRoutePath
 */
export class RouterExpressCustom {
  private router: Router;
  private app: Application;
  constructor(app: Application) {
    this.app = app;
    this.router = Router();
  }

  /**
   * Realiza una lectura de ficheros en busca de
   * un router con rutas declaradas para incorporarlas
   * a la aplicación.
   *
   * @param routesPath - ruta donde están alojados los ficheros de ruta
   */
  public setUp = async (routesPath: string): Promise<void> => {
    const routesDir = path.resolve(routesPath);
    const files = fs.readdirSync(routesDir);
    for (let file of files) {
      const filePath = path.join(routesDir, file);
      // filtramos el fichero principal
      if (file === "index.router.ts") continue;
      if (file.endsWith(".ts")) {
        const routeModule = await import(filePath);
        const { router } = routeModule;
        this.router.use(router);
        this.app.use(this.router);
      } //end if
      else if (fs.lstatSync(filePath).isDirectory()) {
        this.setUp(path.join(routesPath, file));
      } else {
        break;
      }
    } //end for
  };

  /**
   * Extrae de la ruta generar del fichero la ruta
   * relativa, lista para usar como endpoint
   * @param fullPath - ruta general del directorio de la ruta, piense en __dirname
   * @returns string
   */
  public static getRoutePath = (fullPath: string): string => {
    const end = path.basename(fullPath);
    const begin = 'routes';

    const beginIndex = fullPath.indexOf(path.sep + begin);
    const endIndex = fullPath.indexOf(end);
    const subPath1 = fullPath.substring(beginIndex, endIndex + end.length);
    const subPath2 = subPath1.replace(new RegExp("\\" + path.sep, "g"), "/");
    const subruta = subPath2.replace("/routes", "");

    return subruta;
  };
}
