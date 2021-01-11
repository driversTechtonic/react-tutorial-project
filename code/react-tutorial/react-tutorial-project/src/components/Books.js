import React, { Component } from 'react';
import './Books.css';
import request from 'superagent';
import BookList from './BookList';


class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            SearchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get('../data/data.json')
            .query({ q: this.state.SearchField })
            .then((data) => {
                this.setState({ books: [...data.body.items]})
            }, [])
    }

    handleSearch = (e) => {
        this.setState({ SearchField: e.target.value })
    }

    render() {
        return (
            <div className='Books'>
                <BookList books={this.state.books} />
            </div>
        );
    }
}

export default Books;