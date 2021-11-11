import { policyModel } from "../models/policyModel.js"

export const getPolicy = async(req, res) => {
    try {
        const data = await policyModel.find();
        console.log('data :', data);
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}