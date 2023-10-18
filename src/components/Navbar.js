import React from 'react';

import menuLogo from './menu_logo2.png'
import './Navbar.css';


export default function Navbar() {
  return (
  <>   
    <div className='container'> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src={menuLogo}  alt='weather' width={'150px'} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">  <i className="fa fa-gamepad text-white fa-2x" aria-hidden="true"></i>   <span className="sr-only">(current)</span></a>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Location
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item location-text-active " href="/">Location</a>
                <a className="dropdown-item location-text-active" href="/">News</a>
                <a className="dropdown-item location-text-active" href="/">Videos</a>
                
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">  <i className="fa fa-television fa-2x text-white" aria-hidden="true"></i>  <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> <i className="fa fa-bars text-white fa-2x" aria-hidden="true"></i> </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</>
  )
}