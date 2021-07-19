import React, {Component} from 'react'
import Loader from "../Loader/Loader";
import BookCard from "../BookCard/BookCard";
import {observer} from "mobx-react";
import globalStore from '../../service/Store.js'
import './MainPage.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Header from "../Header/Header";


export default @observer
class mainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPageLoading: true

        }
        this.handleLoadMore = this.handleLoadMore.bind(this)
        //this.componentDidMount=this.componentDidMount.bind(this)
    }

    componentDidMount() {
        globalStore.getBooksFromAPI()
    }


    handleLoadMore() {
        globalStore.getBooksFromAPI()
    }

    renderLoadMore() {
        return (
            <button onClick={this.handleLoadMore}>Load More</button>
        )
    }

    renderPageContent() {
        return (
            <div>
                <div>Found {globalStore.totalResult} results</div>
                <div className="bookCards">

                    {globalStore.books.map(book => <Link to={`books/${book.id}`} id={book.id}><div key={book.id}><BookCard book={book}/></div></Link>)}

                </div>
                {this.renderLoadMore()}

            </div>
        )
    }

    render() {
        return (
            <>
                <Header />
                {globalStore.isPageLoading ? <Loader/> : this.renderPageContent()}
            </>

        )
    }
}