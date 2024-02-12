import React from 'react'
import  logo  from "../Logo.png";
const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className='container'>
  <a className="navbar-brand" href="#"><img src={logo} className='logo'/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse  justify-content-end " id="navbarSupportedContent">
    <ul className="navbar-nav ">
      <li className="nav-item active mx-2">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link" href="#">About me</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link mx-2" href="#">services</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link" href="#">portfolio</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link" href="#">contcats</a>
      </li>
      
  
     
    </ul>
    
  </div>
  </div>
</nav>
  )
}

export default Navbar
