import React, { useState } from 'react';
import './SearchBooks.css';
import Data from '../data/data.json';
import { Button } from './Button';



const SearchBooks = (props) => {

    let [searchInput, setSearchInput] = useState("");
    function doesBookMatch(book, searchTerm) {
        return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    function searchBook(e) {
        e.preventDefault();
        console.log("search Input: "+searchInput);

        const matchingBooks = Data.filter((book) => 
            doesBookMatch(book, searchInput)
        );
        console.log(matchingBooks);
    }
    function handleInputChange(e) {
        setSearchInput(e.target.value);
        console.log(searchInput);
    }
    return(
        <div className='SearchBooks'>
            <form onSubmit={searchBook} action='./bookshelf'>
                <input onChange={handleInputChange} type='text' placeholder='Search Books' />
                <Button type='submit' buttonStyle='btn--secondary' buttonSize='btn--wide' buttonColor='secondary'>Search
                </Button>           
            </form>
        </div>
    )
}

export default SearchBooks;