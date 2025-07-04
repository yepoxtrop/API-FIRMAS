import { postUserControl } from "../controllers/postUser.controller.js";
import { Router } from "express";

const router = Router();

router.post('/postUser', postUserControl);

export default router;