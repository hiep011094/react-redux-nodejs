import express from 'express';
import { getCustomer, getCustomerAll } from '../controllers/customerController.js';

const router = express.Router();

router.get('/', getCustomerAll);
router.get('/:name', getCustomer);

export default router;