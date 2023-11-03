import express from 'express';
import { listProducts, createCategory, listCategories, createProducts } from '../products/products.controller.js'
const routes = express.Router();


routes.post('/category',createCategory)
routes.get('/category', listCategories);

routes.post('/productList', createProducts)
routes.get('/productList', listProducts)

export default routes;