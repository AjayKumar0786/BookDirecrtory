import express from 'express';
import {Register,login} from '../Controller/UserController.js';

export const userRouter = express.Router();
userRouter.post('/Register',Register)
.post('/login',login);