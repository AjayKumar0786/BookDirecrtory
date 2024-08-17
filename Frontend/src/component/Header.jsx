import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom';
const Header = () => {
const navigate = useNavigate();
let islogin = localStorage.getItem('token');
const handlelogout  = ()=>{
  localStorage.removeItem('token');
  navigate('/');
}
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">BookStore</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Addbook">Add Book</a>
              </li>
            
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">show Books</a>
              </li>
            
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 More Options
                </a>
               
              </li>
            
            </ul>
            <div>
              <a onClick={handlelogout} className='logout'>{islogin?'Logout':' '}</a>
            </div>
            <form className="d-flex" action="/books/getBook" method="get">
              <input className="form-control me-2" type="search"  name ="search" placeholder="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
