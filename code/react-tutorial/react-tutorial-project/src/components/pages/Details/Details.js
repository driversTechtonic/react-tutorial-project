import React, { Component } from 'react';
import BookDetails from '../../BookDetails';
import './Details.css'

class Details extends Component {
    render () {
        return (
            <div className='Details'>
                <div className='Header'>
                    <h1>Book Details</h1>
                </div>
                <BookDetails />
            </div>
        )
    }
}

export default Details