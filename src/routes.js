import { Router } from "express"
import controller from "./controller.js"

const router = Router()

router.get("/", controller.getNotes)
router.post("/", controller.addNotes)
export default router
