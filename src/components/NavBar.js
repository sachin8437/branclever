import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/logoWhite.png';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isSticky ? 'sticky' : ''}>
        <div className='inner-header'>
          <div className='container'>
            <div className='inner_header_nav'>
              <div className="logo">
                <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
              </div>
              <div className={`menu-toggle ${isMenuOpen ? 'openMenus' : 'closeMenus'}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                <div className='closeIcon'><i className="fa fa-close"></i></div>
              </div>
              <nav className={isMenuOpen ? 'open' : 'closeToggal'}>
                <ul>
                  <li>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                  </li>
                  <li>
                    <div className="dropdownMenu">
                      <Link to="/service" onClick={closeMenu} className="dropbtn">Services <span class="arrow-right"><span class="ar_line"></span><span class="ar_left"></span></span></Link>
                        <div className="dropdown-content"> 
                          <div className="row">
                            <div className="columnMenu">
                              <h3>Category 1</h3>
                              <Link to=''>Website Designing</Link>
                              <Link to=''>Web Development</Link>
                              <Link to=''>Graphic Designs</Link>   
                              <Link to=''>Mern Stack</Link>
                              <Link to=''>Content Strategy</Link>
                              <Link to=''>Framework</Link>
                            </div>
                            <div className="columnMenu">
                              <h3>Category 2</h3>
                              <Link to=''>CMS Solutions </Link>
                              <Link to=''>Landing Page</Link>
                              <Link to=''>Ecommerce</Link>  
                              <Link to=''>Digital Marketing</Link>
                              <Link to=''>Web Application Development</Link>
                              <Link to=''>Software Testing</Link>  
                            </div>
                            <div className="columnMenu"> 
                              <img src={ process.env.PUBLIC_URL+'/images/menus/ser_new_img.png'} alt='' />
                            </div>
                          </div>
                        </div>
                      </div> 
                  </li>
                  <li>
                    <div className="dropdownMenu"> 
                      <Link to="/career" className="dropbtn">Career <i className="fa fa-caret-down"></i></Link>
                      <div className="dropdown-content"> 
                          <div className="row">
                            <div className="columnMenu">
                              <Link to="/traning-and-placement">Training & Placement </Link>
                            </div>
                            <div className="columnMenu"> 
                              <img src={ process.env.PUBLIC_URL+'/images/menus/ser_new_img.png'} alt='' />
                            </div>
                          </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/review" onClick={closeMenu}>Client Review's</Link>
                  </li>
                </ul>
                <div className='get_hed_btnn'>
                  <Link to="/contact" className='button_slide slide_down' onClick={closeMenu}>Get In Touch</Link>
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
