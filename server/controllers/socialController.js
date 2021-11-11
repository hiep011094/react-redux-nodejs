import { socialModel } from "../models/socialModel.js"

export const getSocial = async(req, res) => {
    try {
        const data = await socialModel.find()
        console.log('data : ', data)
        res.status(200).json(data)
    } catch (error) {
        console.log('loi');
        res.status(500).json({ error: error })
    }
}