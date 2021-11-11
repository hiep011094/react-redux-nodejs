import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const policyModel = mongoose.model('Policies', schema)