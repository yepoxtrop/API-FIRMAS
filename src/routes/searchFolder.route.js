import { searchFolderControl } from "../controllers/searchFolder.controller.js";
import { Router } from "express";

const router = Router();

router.post('/searchFolder', searchFolderControl);

export default router;