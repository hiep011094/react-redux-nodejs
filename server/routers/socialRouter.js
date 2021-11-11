import express from "express"
import { getSocial } from "../controllers/socialController.js";


const router = express.Router()

router.get('/', getSocial)

export default router