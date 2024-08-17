import React,{useState} from 'react'
import axios from 'axios';
const Addbook = () => {
const [data,setdata] = useState({});
const handlechange = (e)=>{
const{name,value} = e.target;

setdata((prev)=>{
  return {...prev,[name]:value};
})
}
const handleclick =async (e)=>{
e.preventDefault();
try{
  const senddata  = await axios.post('https://bookdirecrtory.onrender.com/books/AddBook',data);
  

}catch(e){
  console.log(e.message);
}

}
  return (
    <>
     <section>
 
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <form>
          
  <div className="mb-3">
    <label htmlFor="booktitle" className="form-label">Enter Book Title</label>
    <input type="text" className="form-control" id="booktitle" placeholder='Title'  name ="title"  onChange={handlechange}  value={data.title} />
 
  </div>
  <div className="mb-3">
    <label htmlFor="subtitle" className="form-label">Enter Book Subtitle</label>
    <input type="text" className="form-control" id="subtitle" placeholder='Subtitle'  name ="subtitle" onChange={handlechange}  value={data.subtitle}/>
 
  </div>
  <div className="mb-3">
    <label htmlFor="Authorname" className="form-label">Enter the Author Name</label>
    <input type="text" className="form-control" id="Authorname" placeholder='Author' name ="author" onChange={handlechange} value={data.author} />
  </div>
  <div className="mb-3">
    <label htmlFor="Page" className="form-label">Pages</label>
    <input type="text" className="form-control" id="Page" placeholder='Pagenumber' name ="pages" onChange={handlechange}  value={data.pages}/>
  </div>
  <div className="mb-3">
    <label htmlFor="Publisher" className="form-label">Publisher</label>
    <input type="text" className="form-control" id="Publisher" placeholder='Publisher' name ="publisher" onChange={handlechange}  value={data.publisher}/>
  </div>
  <div className="mb-3">
    <label htmlFor="Website" className="form-label">Website</label>
    <input type="text" className="form-control" id="Website" placeholder='Website' name ="website" onChange={handlechange} value={data.website} />
  </div>
 
  <button onClick={handleclick} type="submit" className="btn btn-primary">Submit</button>
</form>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Addbook
