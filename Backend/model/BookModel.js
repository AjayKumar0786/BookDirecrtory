import mongoose from "mongoose";
const BookSchema = new mongoose.Schema({
    title:{type:String, required:true},
    subtitle:{type:String,},
    author:{type:String, required:true},
 
    pages:{type:Number,required:true},
  
    publisher:{type:String, required:true},
    website:{type:String},
 

})
export const Book = mongoose.model('Book',BookSchema);