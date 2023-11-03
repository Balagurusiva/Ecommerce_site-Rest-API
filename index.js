//const express = require("express");
import express from 'express';
import bodyParser from 'body-parser';
//const userRoutes = require('./Routes/users');
import { mongoConnect } from './utils/db.js';
// import userRoutes from './routes/users.js';
// import productRoutes from './routes/products.js';

const app = express();

app.use(bodyParser.json()); // Parsing req body data

app.get('/', (req, res, next) => {
    res.send('<h1>Welcome to ecommerce service</h1>');
});


// app.use('/user', userRoutes);
// app.use('/product', productRoutes);

// app.use((req, res) => {
//     res.send('<h1>Page Not Found!</h1>')
// });

mongoConnect();

app.listen(3000, () => {
    console.log('Check port no 3000');
});
