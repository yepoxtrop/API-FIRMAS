import { sign } from "crypto";
import fs from "fs";
import os from "os";
import path from "path";

export async function userFolder(data, models) {
  try {
    // ruta del usuario
    const routeUser = path.join(
      os.homedir(),
      "Documents",
      "FirmasACS",
      `Firma_${data.cedula}`
    );

    // Verificar si la carpeta del usuario ya existe
    fs.mkdirSync(routeUser, { recursive: true });

    // rutas de los archivos
    const keyRoute = path.join(routeUser, `clavePrivada${data.cedula}.key`);
    const requestCertificateRoute = path.join(
      routeUser,
      `solicitudCertificado${data.cedula}.csr`
    );
    const certificateRoute = path.join(
      routeUser,
      `certificado${data.cedula}.crt`
    );
    const signatureRoute = path.join(routeUser, `firma${data.cedula}.p12`);

    // Validacion de existencia de archivos
    if (!fs.existsSync(keyRoute)) {
      await models.key(data, keyRoute);
    }

    if (!fs.existsSync(requestCertificateRoute)) {
      await models.requestCertificate(data, {
        key: keyRoute,
        request: requestCertificateRoute,
      });
    }

    if (!fs.existsSync(certificateRoute)) {
      await models.certificate(data, {
        key: keyRoute,
        request: requestCertificateRoute,
        certificate: certificateRoute,
      });
    }

    if (!fs.existsSync(signatureRoute)) {
      await models.signature(data, {
        key: keyRoute,
        request: requestCertificateRoute,
        certificate: certificateRoute,
        signature: signatureRoute,
      });
    }

    return await models.sendEmailUser(data, signatureRoute);
  } catch (error) {
    return JSON.stringify({ message: error.message, stack: error.stack });
  }
}
