import openssl from "openssl-nodejs";
import os from "os";
import path from "path";
import { exec } from "child_process";
import fs from "fs";

export async function key(data, keyRoute) {
  try {
    //se realiza subproceso con comandos openssl para crear archivo key
    await new Promise((resolve, reject) => {
      exec(
        `openssl genrsa -passout pass:${data.contrasena} -des3 -out "${keyRoute}" 2048`,
        (error, stdout, stderr) => {
          if (error) {
            console.error("Error:", stderr.toString());
            reject(error);
          } else {
            console.log("SE CREO: llave privada");
            resolve();
          }
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
}
