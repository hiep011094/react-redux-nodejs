import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import socialRouter from "./routers/socialRouter.js"
import policyRouter from "./routers/policyRouter.js"
import productRouter from "./routers/productRouter.js"
import sliderHeroRouter from "./routers/sliderHeroRouter.js"

const app = express()
const PORT = process.env.port || 5000

const URI = "mongodb://localhost:27017/xistore"

app.use(bodyParser.json({ limit: "30mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }))
app.use(cors())

app.use('/api/v1/social', socialRouter)
app.use('/api/v1/policy', policyRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/hero-slider', sliderHeroRouter)


mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('database connect success');
    app.listen(PORT, () => {
        console.log(`connect server success port : ${PORT}`);
    })
}).catch((err) => {
    console.log('error', err);
})