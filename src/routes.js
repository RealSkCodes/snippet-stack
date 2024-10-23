import { Router } from "express"
import controller from "./controller.js"

const router = Router()

router.get("/categories", controller.getCategories)
router.get("/:category", controller.getNotesByCategory)
router.get("/", controller.getNotes)
router.post("/", controller.addNotes)

export default router
