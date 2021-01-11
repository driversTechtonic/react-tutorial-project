import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
      </div> 
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <FaBook className='navbar-icon' />
              The Library
            </Link>
          </div>
          <small className='website-rights'>The Library © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;