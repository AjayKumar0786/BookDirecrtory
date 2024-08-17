import React,{useState} from 'react'
import './Style.css'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
const [data,setdata] = useState({});
const [token,sendtoken] = useState("");
const navigate = useNavigate();
const handlesubmit =async (e)=>{
  e.preventDefault();
  try{
    const response = await axios.post('https://bookdirecrtory.onrender.com/user/login',data);
    

    if(response.data.success==true){
    const token = response.data.token;
    // console.log(token);
    localStorage.setItem('token', token);

      // Set the token in Axios headers for future requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

   
      navigate('/Home');

    }
    else{
      console.log("error!");
    }
  }catch(err){
    console.log(err);
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
              <h2 className=" text-center">User login</h2>
              <form >
              
                
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
                <button type="submit" className="btn  btn_styling text-white" onClick={handlesubmit}>Login</button>
                 <p> <span><Link to="/register"><u>New here Register here</u></Link></span></p>
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

export default Login
