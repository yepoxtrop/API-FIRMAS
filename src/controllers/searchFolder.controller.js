import { searchFolder } from "../models/searchFolder.js";

export const searchFolderControl = async(req, res) =>{
    try {
        const data = req.body;
        const searchFolderData = await searchFolder(data);
        res.json({message:"Estado de la fima", data: searchFolderData});
    } catch (error) {
        console.error(error)
    }
}