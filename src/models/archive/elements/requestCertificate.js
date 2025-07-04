import openssl from "openssl-nodejs";
import os from "os";
import path from "path";
import { exec } from "child_process";
import fs from "fs";

export async function requestCertificate(data, routeUser) {
  try {
    const subject = `/C=CO/ST=Cundinamarca/L=Bogotá/O=ACS-Aceil Soluciones Integrales S.A.S/OU=${data.cedula}/CN=${data.nombre.toLowerCase()}/emailAddress=${data.correo}`;

    await new Promise((resolve, reject) => {
      exec(
        `openssl req -new -key "${routeUser.key}" -passin pass:"${data.contrasena}" -subj "${subject}" -out "${routeUser.request}"`,
        (error, stdout, stderr) => {
          if (error) {
            console.error("Error:", stderr.toString());
            reject(error);
          } else {
            console.log("SE CREO: solicitud de certificado");
            resolve();
          }
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
}
