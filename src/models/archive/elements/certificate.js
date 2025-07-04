import openssl from "openssl-nodejs";
import os from "os";
import path from "path";
import { exec } from "child_process";
import fs from "fs";

export async function certificate(data, routeUser) {
  try {

    await new Promise((resolve, reject) => {
      exec(
        `openssl x509 -req -days 365 -in "${routeUser.request}" -signkey "${routeUser.key}" -passin pass:"${data.contrasena}" -out "${routeUser.certificate}"`,
        (error, stdout, stderr) => {
          if (error) {
            console.error("Error:", stderr.toString());
            reject(error);
          } else {
            console.log("SE CREO: certficado");
            resolve();
          }
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
}
