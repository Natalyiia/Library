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
            isLoadingMore: false
        }
        this.handleLoadMore = this.handleLoadMore.bind(this)
        //this.componentDidMount=this.componentDidMount.bind(this)
    }

    componentDidMount() {
        globalStore.getBooksFromAPI()
    }


    handleLoadMore() {
        this.setState({isLoadingMore: true})
        globalStore.getBooksFromAPI().then(() => this.setState({isLoadingMore: false}))
    }

    renderLoadMore() {
        return (
            <button onClick={this.handleLoadMore} className="button-load-more">Load More</button>
        )
    }

    renderPageContent() {
        return (
            <div>
                <div className="search-total">Found {globalStore.totalResult} results</div>
                <div className="bookCards">

                    {globalStore.books.map(book => <Link style={{textDecoration: 'none'}} to={`books/${book.id}`}
                                                         id={book.id}>
                        <div key={book.id} className="book-link"><BookCard book={book}/></div>
                    </Link>)}

                </div>
                {globalStore.isPageLoading && this.state.isLoadingMore ? <Loader/> : this.renderLoadMore()}
            </div>
        )
    }

    render() {
        return (
            <>
                <Header/>
                {globalStore.isPageLoading && !this.state.isLoadingMore ? <Loader/> : this.renderPageContent()}
            </>

        )
    }
}