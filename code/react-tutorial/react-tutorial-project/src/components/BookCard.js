import React from 'react';
import './BookCard.css';
import Data from '../data/data.json';



function BookCard () {
    return (
        <div className='BookCard'>
            <div className='Books'>
                { Data.map(book => {
                    return(
                        <div key={ book.id } className='book'>
                        <img src={ book.book_cover } alt='' />
                        <h2>{ book.title }</h2>
                        <p>{ book.author }</p>
                        <p>{ book.published }</p>
                        <p>{ book.synopsis }</p>
                        <p>{ book.pages }</p>
                        <p>{ book.rating }</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default BookCard;