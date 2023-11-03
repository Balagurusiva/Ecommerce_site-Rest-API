import express from 'express';
import { listProducts } from '../products/products.controller.js'
const routes = express.Router();

routes.get('/list-products', listProducts);

export default routes;