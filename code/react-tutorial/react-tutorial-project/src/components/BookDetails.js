import React from 'react';
import './BookDetails.css';
import Data from '../data/data.json';
import { Link } from 'react-router-dom';
import { Button } from './Button';


function BookDetails (props) {
    return (
        <div className='BookDetails'>
            <div className='Books'>
                { Data.filter((book) => book.id === props.id).map(book => {
                    return(
                        <div key={ book.id } className='book'>
                        <img src={book.book_cover} alt='' />
                        <h2>Title: { book.title }</h2>
                        <p>Author: { book.author }</p>
                        <p>Published: { book.published }</p>
                        <p>Synopsis: { book.synopsis }</p>
                        <p> Page Count: { book.pages }</p>
                        <p>Rating: { book.rating } out of 5 stars</p>
                        </div>
                    )
                }) }
            </div>
            <div className='BookDetails__Btn'>
                <Link to='/editbook'>
                <Button type='button' buttonSize='btn--large' buttonColor='secondary'>Edit Book</Button></Link>
            </div>
        </div>
    );
}


export default BookDetails;