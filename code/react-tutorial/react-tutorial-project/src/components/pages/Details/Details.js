import React from 'react';
import BookDetails from '../../BookDetails';
import './Details.css'
import { useParams } from 'react-router-dom';

const Details = () => {

    const { id } = useParams();
     
         return (
            <div className='Details'>
                <div className='Header'>
                    <h1>Book Details</h1>
                </div>
                <BookDetails id={parseInt(id)} />
            </div>
        )

};

export default Details