// modules
import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import 'dotenv/config'
import mongoose from 'mongoose';
import {userRouter} from './Routes/UserRoute.js';
import { bookRouter } from './Routes/BookRoute.js';
import { Book } from './model/BookModel.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';
// declare all the constants
const app = express();
const port = 4000;
console.log(process.env.PORT);



// declare middlewares functions
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.get('/',(req,res)=>{
    res.send("hello sir");
})
// connect mongodb 

main().catch((err)=>console.log(err));
async function main(){
    mongoose.connect(process.env.MONGODBURL);
    console.log('connect successfully');
}

//middleware to check either the user is login or not
const auth = ((req,res,next)=>{
    const token = req.get('Authorization').split('Bearer ' )[1];
    console.log(token);
    let decoded = jwt.verify(token,process.env.SECRET);
 
    if(decoded.email){
        next() 

     }
     else{
         res.sendStatus(401)
     }
})

// routes
app.use('/user',userRouter);
app.use('/books',bookRouter);
























app.listen(port,()=>{
    console.log('listening on port');
    
})