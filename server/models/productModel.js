import mongoose from "mongoose"

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price_news: {
        type: Number,
        required: true,
    },
    price_old: {
        type: Number,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    cate_slug: {
        type: String,
        required: true,
    },
    colors: {
        type: Array,
        required: true,
    },
    sizes: {
        type: Array,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const productModel = mongoose.model('Products', schema);