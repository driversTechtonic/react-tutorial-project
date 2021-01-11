import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import SearchBooks from './SearchBooks';





function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
        <div className="navbar-container">
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <FaBook className="navbar-icon"/>
                The Library
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>

                </li>
                <li className="nav-item">
                <Link to='/bookshelf' className='nav-links' onClick={closeMobileMenu}>
                        Bookshelf
                    </Link> 
                </li>
                <li className="nav-item">
                <Link to='/addbook' className='nav-links' onClick={closeMobileMenu}>
                        Add A Book
                    </Link> 
                </li>
                <li className="nav-item" >
                    <SearchBooks />
                </li>
            </ul>
        </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar

