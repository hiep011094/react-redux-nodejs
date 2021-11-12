import { customerModel } from '../models/customerModel.js';
export const getCustomerAll = async(req, res) => {
    try {
        const data = await customerModel.find();
        res.status(200).json(data[0])
    } catch (error) {
        res.status(500).json({ data: error })
    }
}

export const getCustomer = async(req, res) => {
    try {
        const key = req.params.name;
        const data = await customerModel.find().select(key);
        res.status(200).json(data[0][key])
    } catch (error) {
        res.status(500).json({ data: error })
    }
}