import React, {Component} from 'react'
import './BookCard.css';
export default class BookCard extends Component {
    render() {
        const {title,authors,categories,imageLinks} = this.props.book.volumeInfo
        return (
            <div className="card">
                <img src={imageLinks?.smallThumbnail} className="card-cover" alt="Book cover picture"/>
                <div className="card-info">
                    <div className="card-category">{categories!==undefined? categories[0]:'' }</div>
                    <div className="card-title">{title}</div>
                    <div className="card-author">{authors!==undefined?authors.join(', '):''}</div>
                </div>
            </div>
        )
    }
}