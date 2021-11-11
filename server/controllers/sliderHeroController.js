import { sliderHeroModel } from "../models/sliderHeroModel.js"

export const getSliderHero = async(req, res) => {
    try {
        const data = await sliderHeroModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}