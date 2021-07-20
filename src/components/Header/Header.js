import React, {Component} from 'react'
import Filtration from "../Filtration/Filtration";
import globalStore from "../../service/Store";
import {observer} from "mobx-react";
import {withRouter} from "react-router-dom";
import './Header.css'

@observer
class Header extends Component {
    constructor(props) {
        super(props);
        this.findBooksByFiltration = this.findBooksByFiltration.bind(this)
    }

    findBooksByFiltration(CurFilter) {
        this.props.history.push('/')
        if (JSON.stringify(CurFilter) !== JSON.stringify(globalStore.filter) && this.props.match.path!=="/books/:bookId") {
            globalStore.changeStore(CurFilter);
            globalStore.getBooksFromAPI();
        }
        else if(this.props.match.path==="/books/:bookId"){
            globalStore.changeStore(CurFilter)
        }
    }

    render() {
        return (
            <div className="content">
                <h1 className="site-title">Search for Books</h1>
                <Filtration onSearch={this.findBooksByFiltration}/>
            </div>
        )
    }
}

export default withRouter(Header);