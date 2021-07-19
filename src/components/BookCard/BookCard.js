import React, {Component} from 'react'
import './BookCard.css';
export default class BookCard extends Component {
    render() {
        const {title,authors,categories,imageLinks} = this.props.book.volumeInfo
        return (
            <div className="card">
                <img src={imageLinks?.smallThumbnail} width="128" height="204"/>
                <div className="category">{categories!==undefined? categories[0]:'' }</div>
                <div className="cardTitle">{title}</div>
                <div className="">{authors!==undefined?authors.join(', '):''}</div>
            </div>
        )
    }
}