import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import './Form.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';



const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    });

    return valid;
};

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookImage: null,
            title: null,
            author: null,
            published: null,
            pageCount: null,
            synopsis: null,
            rating: null,
            formErrors: {
                bookImage: "",
                title: "",
                author: "",
                published: "",
                pageCount: "",
                synopsis: "",
                rating: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state)) {
            console.log(`
            --SUBMITTING--
            bookImage: ${this.state.bookImage}
            Title: ${this.state.title}
            Author: ${this.state.author}
            Published: ${this.state.published}
            pageCount: ${this.state.pageCount}
            Synopsis: ${this.state.synopsis}
            Rating: ${this.state.rating}
        `)} else {
                console.error('FORM INVALID - DISPLAY ERROR MESSAGE')
            }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case '':
                formErrors.title = 
                value.length < 1 
                ? 'minimum 1 characters required' : '';
                break;
            case 'author':
                formErrors.author = 
                value.length < 2 
                ? 'minimum 2 characters required' : '';
                break;
            case 'published':
                formErrors.published = 
                value.length < 10 
                ? '' : 'published date required';
                break;
            case 'pageCount':
                formErrors.pageCount = 
                value.length < 1 
                ? 'page count required' : '';
                break;
            case 'synopsis':
                formErrors.synopsis =
                value.length < 10
                ? 'minimum 10 characters required' : '';
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value}, () => console.log(this.state));
    };

    render() {
        const ratingChanged = (newRating) => {
            console.log(newRating);
          };
        const { formErrors } = this.state;
        return <div className='wrapper'>
            <h1>Add A Book</h1>
            <div className='form-wrapper'>
                <form action='/bookshelf' method='POST' className='addForm' onSubmit={this.handleSubmit} noValidate>
                    <div className='bookImage'>
                        <label htmlFor='bookImage'>Book Cover</label>
                        <input type='file' className={formErrors.bookImage.length > 0 ? 'error' : null} placeholder='Book Cover' name='bookImage' noValidate onChange={this.handleChange}/>
                        {formErrors.bookImage.length > 0 && (
                            <span className='errorMessage'>{formErrors.bookImage}</span>
                        )}
                    </div>
                    <div className='title'>
                        <label htmlFor='title'>Book Title</label>
                        <input type='text' className={formErrors.title.length > 0 ? 'error' : null} placeholder='Book Title' name='title' noValidate onChange={this.handleChange}/>
                        {formErrors.title.length > 0 && (
                            <span className='errorMessage'>{formErrors.title}</span>
                        )}
                    </div>

                    <div className='author'>
                        <label htmlFor='author'>Author</label>
                        <input type='text' className={formErrors.author.length > 0 ? 'error' : null} placeholder='Author' name='author' noValidate onChange={this.handleChange}/>
                        {formErrors.author.length > 0 && (
                            <span className='errorMessage'>{formErrors.author}</span>
                        )}
                    </div>

                    <div className='published'>
                        <label htmlFor='published'>Published</label>
                        <input type='date'  className='published' placeholder='01/01/1900' name='published' onChange={this.handleChange}/>
                    </div>

                    <div className='pageCount'>
                        <label htmlFor='pageCount'>Page Count</label>
                        <input type='number' min='1' className={formErrors.pageCount.length > 0 ? 'error' : null} placeholder='Page Count' name='pageCount' noValidate onChange={this.handleChange}/>
                        {formErrors.pageCount.length > 0 && (
                            <span className='errorMessage'>{formErrors.pageCount}</span>
                        )}
                    </div>

                    <div className='synopsis'>
                        <label htmlFor='synopsis'>Synopsis</label>
                        <textarea rows='7' cols='50' className={formErrors.synopsis.length > 0 ? 'error' : null} placeholder='Synopsis' name='synopsis' noValidate onChange={this.handleChange}/>
                        {formErrors.synopsis.length > 0 && (
                            <span className='errorMessage'>{formErrors.synopsis}</span>
                        )}
                    </div>

                    <div className='rating'>
                        <label htmlFor='rating'>Rating</label>
                        < ReactStars className='rating'
                            count={5}
                            onChange={ratingChanged}
                            size={32}
                            activeColor="#ffd700" />
                    </div>

                    <div className='submitBook'>
                    <Link to='/bookshelf'>
                                <Button type='submit' buttonSize='btn--large' buttonColor='secondary'>Add Book</Button>
                            </Link>
                            <Link to='/addbook'>
                                <Button type='reset' buttonSize='btn--large' buttonColor='secondary'>Cancel</Button>
                            </Link>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default Form