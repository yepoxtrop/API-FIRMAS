import { loginDomainController } from "../controllers/loginDomain.controller.js";
import { Router } from "express";
const router = Router()

router.post("/loginDomain", loginDomainController);

export default router;