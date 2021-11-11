import express from "express"
import { getProduct } from "../controllers/productController.js";
// import re

const router = express.Router();

router.get('/', getProduct);

export default router;