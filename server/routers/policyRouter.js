import express from "express"
import { getPolicy } from "../controllers/policyController.js"

const router = express.Router()

router.get('/', getPolicy)

export default router