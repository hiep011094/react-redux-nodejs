import mongoose from "mongoose"

const schema = new mongoose.Schema({
    maivisual: {
        type: Object,
        required: true
    },
    menuMain: {
        type: Object,
        required: true
    },
    menuFooter: {
        type: Object,
        required: true
    },
    info: {
        type: Object,
        required: true
    }
})

export const customerModel = mongoose.model('Customer', schema)