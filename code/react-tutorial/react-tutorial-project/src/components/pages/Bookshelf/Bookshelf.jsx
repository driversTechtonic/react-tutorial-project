import React, { Component } from 'react';
import './Bookshelf.css';
import Header from '../../Header';
import Books from '../../Books';


class Bookshelf extends Component {
    render() {
        return (
            <div className='Bookshelf'>
                <Header />
                <Books />
            </div>
        )
    }
}

export default Bookshelf;