import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import globalStore from "../../service/Store";
import Header from "../Header/Header";

class BookInfo extends Component {

    render() {
         const book = globalStore.books.find(book => book.id === this.props.match.params.bookId)
        const {imageLinks, description, categories, authors, title} = book.volumeInfo;
        return (
        <>
            <Header/>
            <div className="content">
                <div>
                    <img src={imageLinks?.thumbnail} width="128px" height="195px"/>
                    <div>{categories? categories.join('/'):''}</div>
                    <div>{title}</div>
                    <div>{authors? authors.join(','):''}</div>
                </div>
                    <div>{description}</div>

            </div>
        </>
        )
    }
}

export default withRouter(BookInfo);