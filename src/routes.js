import { Router } from "express"
import controller from "./controller.js"

const router = Router()

router.get("/", controller.getNotes)

export default router
