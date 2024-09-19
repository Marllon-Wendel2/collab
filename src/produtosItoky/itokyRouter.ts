import { Router } from "express";
import { IstokyController } from "./istokyController.js";

const istokyController = new IstokyController()
const router = Router();

router.post("/", istokyController.postIstoky)
router.get("/", istokyController.getIstoky)
router.put("/:id", istokyController.putIstoky)
router.delete("/:id", istokyController.deleteIstoky)

export default router