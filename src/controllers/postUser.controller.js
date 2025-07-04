import { postUser } from "../models/postUser.js";
import { key } from "../models/archive/elements/key.js";
import { requestCertificate } from "../models/archive/elements/requestCertificate.js";
import { certificate } from "../models/archive/elements/certificate.js";
import { signature } from "../models/archive/elements/signature.js";
import { userFolder } from "../models/archive/userFolder.js";
import { sendEmailUser } from "../models/mail/sendEmailUser.js";

export const postUserControl = async (req, res) => {
    try {
        const data = req.body;
        const postData = await postUser(data, userFolder,{key, requestCertificate, certificate, signature, sendEmailUser});
        res.json({message:"Informacion del usuario recibida", postData})
    } catch (error) {
        return error;
    }
}