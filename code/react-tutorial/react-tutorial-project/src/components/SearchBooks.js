import React from 'react';
import './SearchBooks.css';
import { Button } from './Button';



const SearchBooks = (props) => {
    return(
        <div className='SearchBooks'>
            <form onSubmit={props.searchBook} action='./bookshelf'>
                <input onChange={props.handleSearch} type='text' placeholder='Search Books' />
                <Button type='submit' buttonStyle='btn--secondary' buttonSize='btn--wide' buttonColor='secondary'>Search
                </Button>           
            </form>
        </div>
    )
}

export default SearchBooks;