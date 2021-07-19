import React, {Component} from 'react'
import './Filtration.css'

export default class Filtration extends Component {
    constructor() {
        super();
        this.state = {
            filter: {
                searchString: '',
                category: 'all',
                sorting: 'relevance'
            }
        }
        this.handleSorting = this.handleSorting.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
        this.handleSearching = this.handleSearching.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.searchBooks = this.searchBooks.bind(this)
    }

    handleSorting(event) {
        this.setState({
            filter: {
                ...this.state.filter,
                sorting: event.target.value,
            }
        })
    }

    handleCategory(event) {
        this.setState({
            filter: {
                ...this.state.filter,
                category: event.target.value,
            }
        })
    }

    handleSearching(event) {
        this.setState({
            filter: {
                ...this.state.filter,
                searchString: event.target.value,
            }
        })
    }

    searchBooks = () => {
        this.props.onSearch(this.state.filter)
    }

    handleFocus(e) {
        e.target.addEventListener("keyup", event => {
            if (event.keyCode === 13) {
                this.searchBooks();
            }
        })
    }

    renderSearchBar() {
        return <input type="text" onChange={this.handleSearching} onFocus={this.handleFocus} className="search-field"/>
    }

    renderCategoryFilter() {
        return (
           <>
               <label> Categories
                   <select onChange={this.handleCategory} className="filter-field">
                    <option selected value="all">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                  </select>
               </label>
           </>
        )
    }

    renderSortingBy() {
        return (
            <>
                <label> Sorting by
                    <select onChange={this.handleSorting} className="sorting-field">
                        <option selected value={"relevance"} >relevance</option>
                        <option value={"newest"}>newest</option>
                    </select>
                </label>
            </>
        )
    }

    render() {
        return (
            <div>
                {this.renderSearchBar()}
                <button onClick={this.searchBooks} className="button-search">Search</button>
                <div className="filter-block">
                {this.renderCategoryFilter()}
                {this.renderSortingBy()}
                </div>
            </div>
        )
    }
}