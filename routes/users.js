 //const express = require("express");
import express from 'express';
import { userList, userRegistration, userExistsCheck, userLogin, userAccount } from '../users/user.controller.js';
import { body } from 'express-validator';
import validateBody from '../config/validator.js';
import { validation } from '../middleware/validation.js';
const routes = express.Router();

routes.post('/register', validation(validateBody.users.register),  userRegistration);
routes.post('/email-check', validation(validateBody.users.emailCheck), userExistsCheck);
routes.post('/login', validation(validateBody.users.login), userLogin);
routes.get('/myaccount', userAccount);

routes.get('/list', userList)

//module.exports = routes;
export default routes;
