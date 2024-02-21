import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/logoWhite.png';
//import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <>
    <header>
        <div className='inner-header'>
            <div className='container'>
              <div className='inner_header_nav'>
                   <div className="logo">
                    <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
                  </div>
                 <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/service">Services</Link>
                        </li>
                        <li className="drop-down">
                            <Link to="/career">Career</Link>
                            <ul className="sub-menus">
                                <li>
                                    <Link to="/traning-and-placement">Training & Placement </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li> 
                        <li>
                            <Link to="/review">Client's Review</Link>
                        </li>  
                    </ul> 
                   <div className='get_hed_btnn'>
                    <Link to="/contact" className='button_slide slide_down'>Get In Touch</Link>
                  </div>
                </nav>
            </div>
        </div>
            
        </div>
    </header>
    
    </>
   
  );
};

export default NavBar;