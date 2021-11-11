import { productModel } from "../models/productModel.js"

export const getProduct = async(req, res) => {
    try {
        const data = await productModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}