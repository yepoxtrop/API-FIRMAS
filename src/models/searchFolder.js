import fs from "fs";
import os from "os";
import path from "path";

export async function searchFolder(data){
    try {
        const routeFolder = path.join(os.homedir(), "Documents", "FirmasACS", `Firma_${data.cedula}`);
        console.log(routeFolder);
        if(fs.existsSync(routeFolder)){
            console.log("Tu firma existe");
            return {message: 'Tu firma existe'};
        }else{
            console.log("Tu firma no existe");
            return {message:'Tu firma no existe'};
        }
    } catch (error) {
        console.error("Error al buscar la carpeta del usuario:", error);
    }
}