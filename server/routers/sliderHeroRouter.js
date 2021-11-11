import express from "express"
import { getSliderHero } from "../controllers/sliderHeroController.js"

const router = express.Router()

router.get('/', getSliderHero)

export default router