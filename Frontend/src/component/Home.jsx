import React from 'react'
import './Style.css'
import { useEffect,useState } from 'react'
import axios from 'axios'

const Home = () => {
const[respons,setResponse]  = useState([]); 
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [data,setdata] = useState({});
const [edit,setedit]= useState(false);
const [id,setbookid]  = useState([]);
const handlechange = (e)=>{
const{name,value} = e.target;

setdata((prev)=>{
  return {...prev,[name]:value};
})
}
const fetchdata = async()=>{
  try{
    const data = await axios.get('https://bookdirecrtory.onrender.com/books/getAllbook');
    const result= data.data;
    
    setResponse(result);
  }catch(e){
    setError(e.message);
  }
  finally{
    setLoading(false);
  }

  
   
}

useEffect(()=>{
 
fetchdata();

},[])

if(loading){
       return <div>Loading...</div> 
}
if (error) {
    return <div>Error: {error}</div>;
  }


  const handleclick = async (id) => {
    try {
        const dd = await axios.delete(`https://bookdirecrtory.onrender.com/books/deleteBook/${id}`);
      
        fetchdata();
      } catch (error) {
      console.log(error);
      }
    }
    const handleedit =async (id)=>{
      setedit(true);
     
      setbookid(id);
   
    }
    const handleupdate = async()=>{

         try{
          const edit = await axios.patch(`https://bookdirecrtory.onrender.com/books/updateBook/${id}`,data);
          await fetchdata();
      }catch(error){
         console.log('error to update the value of the book');
       }
    }
  
    const handleclose =()=>{
      setedit(false);
    }
  return (
    <div>
      
       <div className="container">
        <div className="row">
          
                    
                  {respons.map((books)=>{
                   return(
                    <div key ={books._id} className="col-lg-3 mt-4">
                   
                    <div className="book_card ">
                       <div className="book_img">
                       
                       </div>
                  
                       <div className="title ">
                          <b>Title: </b> {books.title}
                       </div>
                       <div className="subtitle">
                           <b>Subtitle:</b>  {books.subtitle}
                       </div>
                       <div className="author">
                           <b>Author:</b> {books.author}
                       </div>
                       <div className="publisher">
                           <b>Publisher:</b>{books.publisher}
                       </div>
                       <div className="pages">
                           <b>Pages:</b>{books.pages}
                       </div>
                      <div className='d-flex align-items-center justify-content-between'>

                      <div>
                       <button onClick={()=>handleclick(books._id)} type = "submit" className='btn btn-primary   mt-2'>delete</button>
                       </div>
                       <div className='mt-1'>
                        <button onClick={()=>handleedit(books._id)} type='submit' className='btn btn-primary'>Edit</button>
                       </div>
                      </div>
                   </div>
   

               </div>
       
                   )
                  })}
         
    
     
        </div>
        {edit?<div className="row justify-content-center">
          <div className="col-lg-6 popup_parent">
         <div className='popup_design'>
         <div className="popup">
         <div className='cross_btn'>
            <button onClick={handleclose}>❌</button>
          </div>
         </div>
         <form>

          
        <div className="row">
          <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="booktitle" className="form-label">Enter Book Title</label>
            <input type="text" className="form-control" id="booktitle" placeholder='Title'  name ="title"  onChange={handlechange}  value={data.title} />
         
          </div>
        
          </div>

          <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="subtitle" className="form-label">Enter Book Subtitle</label>
            <input type="text" className="form-control" id="subtitle" placeholder='Subtitle'  name ="subtitle" onChange={handlechange}  value={data.subtitle}/>
         
          </div>
          </div>

          <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="Authorname" className="form-label">Enter the Author Name</label>
            <input type="text" className="form-control" id="Authorname" placeholder='Author' name ="author" onChange={handlechange} value={data.author} />
          </div>
          </div>
          <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="Page" className="form-label">Pages</label>
            <input type="text" className="form-control" id="Page" placeholder='Pagenumber' name ="pages" onChange={handlechange}  value={data.pages}/>
          </div>
          </div>
          <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="Publisher" className="form-label">Publisher</label>
            <input type="text" className="form-control" id="Publisher" placeholder='Publisher' name ="publisher" onChange={handlechange}  value={data.publisher}/>
          </div>
          </div>
          <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="Website" className="form-label">Website</label>
            <input type="text" className="form-control" id="Website" placeholder='Website' name ="website" onChange={handlechange} value={data.website} />
          </div>
          </div>
        </div>
          
        
          
         
         
         <div className='text-center'>
         <button onClick={()=>handleupdate()} type="submit" className="btn btn-primary">update</button>
         </div>
        </form>
         </div>
          </div>
        </div>:''}
    </div>
</div>
  )
}

export default Home
