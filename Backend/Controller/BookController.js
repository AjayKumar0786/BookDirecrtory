import {Book} from '../model/BookModel.js';

//add a book to the directory

export const Addbook   = async (req,res)=>{
try{
const{title,subtitle,author,pages,publisher,website} = req.body;

const newbook = new Book({title,subtitle,author,pages,publisher,website});
const doc =await newbook.save();
res.json(doc);
console.log(doc);
}catch(err){
    res.json(err);
    console.log(err);
}
}

//get all the books 
export const getAllbook = async(req,res)=>{
    try{
      const data = await Book.find();
      res.json(data);
    }catch(err){
        res.json(err);
        console.log(err);
    }
}


//get a specific book from the database
export const getBook = async(req,res)=>{
    const id = req.params.id;
    try{
      const data = await Book.findOne({_id:id});
      res.json(data);
     
      
      
    }catch(err){
        res.json(err);
    console.log(err)
    }
}

//replace the book content with the new content
export const replaceBook = async(req,res)=>{
    const id = req.params.id;
   
    console.log(title);
    try{
        
        const data = await Book.findOneAndReplace({_id:id},req.body,{new:true});

        //here we declare new:true because we want the updated book to the list
        //simple data contain the modify document
        res.json(data);
        console.log(data);

    }catch(err){
        res.json(err);
        console.log(err);
    }
}

//update the details of the book

export const updateBook = async(req,res)=>{
  const id =req.params.id;

    try{
        const data = await Book.findOneAndUpdate({_id:id},req.body,{new:true});
        //new:true because it return the modified object
        res.json(data);
        console.log(data);
       
    }catch(err){
        res.json(err);
        console.log(err);
    }
}

//delete the books from the database
export const deleteBook  = async(req,res)=>{
    const id = req.params.id;
    try{
         const data = await Book.findByIdAndDelete({_id:id},req.body,{new:true});
         res.json({message:"successfully deleted",data});
      
    }catch(err){
        res.json(err);
        console.log(err);
    }
}
