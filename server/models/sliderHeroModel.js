import mongoose from "mongoose"

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
        default: "#fbb96b",
    }
}, { timestamps: true })

export const sliderHeroModel = mongoose.model('SliderHero', schema)