import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import globalStore from "../../service/Store";
import Header from "../Header/Header";
import './BookInfo.css'
class BookInfo extends Component {

    render() {
         const book = globalStore.books.find(book => book.id === this.props.match.params.bookId)
        const {imageLinks, description, categories, authors, title} = book.volumeInfo;
        return (
        <>
            <Header/>
            <div className="book-content">
                <div className="book-main-info">
                    <img src={imageLinks?.thumbnail} className="book-cover" alt="Book cover picture"/>
                    <div className='book-detail'>
                        <div>{categories? categories.join('/'):''}</div>
                        <div className="book-title">{title}</div>
                        <div>{authors? authors.join(','):''}</div>
                    </div>
                </div>
                    <div className="book-description">{description}</div>

            </div>
        </>
        )
    }
}

export default withRouter(BookInfo);