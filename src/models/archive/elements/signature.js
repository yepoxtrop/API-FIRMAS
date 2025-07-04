import openssl from "openssl-nodejs";
import os from "os";
import path from "path";
import { exec } from "child_process";
import fs from "fs";

export async function signature(data, routeUser) {
  try {
    await new Promise((resolve, reject) => {
      exec(
        `openssl pkcs12 -export -inkey "${routeUser.key}" -passin pass:"${data.contrasena}" -in "${routeUser.certificate}" -out "${routeUser.signature}" -passout pass:"${data.contrasena}"`,
        (error, stdout, stderr) => {
          if (error) {
            console.error("Error:", stderr.toString());
            reject(error);
          } else {
            console.log("SE CREO: firma");
            resolve();
          }
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
}
