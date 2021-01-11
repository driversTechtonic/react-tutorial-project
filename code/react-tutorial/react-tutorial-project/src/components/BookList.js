import React from 'react';
import './BookList.css';
import Data from '../data/data.json';
import { Link } from 'react-router-dom';



function BookList () {
    return (
        <div className='BookList'>
                <div className='List'>
                    { Data.map(book => {
                        return(
                            <div key={ book.id } className='book'>
                               <Link to='/details'> <img src={ book.book_cover } alt='Book Cover' /> </Link>
                                <h2>{ book.title }</h2>
                                <p>{ book.author }</p>
                                <p>{ book.published }</p>
                            </div>
                        )
                    })}
                </div>
        </div>
    );
}
export default BookList;