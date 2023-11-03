import express from 'express';
import { listProducts, createCategory } from '../products/products.controller.js'
const routes = express.Router();


routes.post('/category',createCategory)
routes.get('/list-products', listProducts);

export default routes;