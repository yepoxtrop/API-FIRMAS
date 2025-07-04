import { loginDomain } from "../models/loginDomain.js";

export const loginDomainController = async (req, res) =>{
    try {
        const data = req.body;
        const domain =  await loginDomain(data); 
        res.json({message: "Logeo", status: domain})
    } catch (error) {
        console.error(error)
    }
}