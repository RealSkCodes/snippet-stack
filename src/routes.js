import { Router } from "express"
import controller from "./controller.js"

const router = Router()

router.get("/", controller.getNotes)
router.post("/", controller.addNotes)
router.get("/:category", controller.getNotesByCategory)

export default router
