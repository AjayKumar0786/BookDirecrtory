import express from 'express';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
import { Addbook,getAllbook,getBook ,replaceBook,updateBook,deleteBook } from '../Controller/BookController.js';
export const bookRouter = express.Router();
bookRouter.post('/AddBook',upload.single('image'),Addbook)
.get('/getAllbook', getAllbook)
.get('/getbook/:id',getBook)
.put('/replaceBook/:id',replaceBook)
.patch('/updateBook/:id',updateBook)
.delete('/deleteBook/:id',deleteBook);