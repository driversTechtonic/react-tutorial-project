import React from 'react';
import './Header.css';
import { FaBook } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
        <FaBook className='icon' />
        <h1>Bookshelf</h1>
        </header>
    )
}
export default Header;