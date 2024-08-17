import React,{useState} from 'react'
import './Style.css'
import axios from 'axios';
import {Link} from 'react-router-dom'
const Register = () => {
const [data,setdata] = useState({});

const handlesubmit =async (e)=>{
  e.preventDefault();
  try{
    const response = await fetch('https://bookdirecrtory.onrender.com/user/Register',{
        method: 'POST',
        body:JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
     
       })
       const result = await response.json();
     
       if(result.success){

     console.log("success")
       }
       else{
   console.log("error");
       }
}
    catch(e){
        console.log(e);
    }
}

const handlechange =(e)=>{
  const{name,value} = e.target;
  setdata((prev)=>{
   return {...prev,[name]:value};
  })

}

  return (
   <>
  
        <section className="login_bg">
      <div className="container ">
        <div className="row justify-content-center align-items-center">
        
          <div className="col-lg-6 login_right_section">

            <div className="form_container">
              <h2 className=" text-center">User Register</h2>
              <form >
              <div className="mb-3">
                    <input type="email" className=" custom_form  w-100" id="floatingemail" placeholder="Enter your email" name="email" onChange={handlechange} value ={data.email}/>
                 
                  </div>
                  <div className="mb-3">
                    <input type="text" className=" custom_form  w-100" id="floatingnumber" placeholder="Enter your Phone number" name="number" onChange={handlechange} value ={data.number}/>
                 
                  </div>
                  <div className="mb-3">
                    <input type="text" className=" custom_form  w-100" id="floatingName" placeholder="username" name="username" onChange={handlechange} value ={data.username}/>
                 
                  </div>
                  <div className="mb-3">
                    <input type="password" className="custom_form w-100" id="floatingPassword" placeholder="Password" name ="password" onChange={handlechange} value={data.password}/>
              
                  </div>
                  <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1"
                    >i agree to the all Statement  in <b><u>Terms of Service</u></b></label>
                </div>
               <div className="text-center">
                <button type="submit" className="btn  btn_styling text-white" onClick={handlesubmit}>Signup</button>
                <p> <span><Link to="/"><u>already user login here</u></Link></span></p>
               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

   
   
   </>
  )
}

export default Register;
