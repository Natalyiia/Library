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
        this.props.history.push('/books')
        if (JSON.stringify(CurFilter) !== JSON.stringify(globalStore.filter)) {
            globalStore.changeStore(CurFilter);
        }
    }

    render() {
        return (
            <div className="content">
                <h1>Search for Books</h1>
                <Filtration onSearch={this.findBooksByFiltration}/>
            </div>
        )
    }
}

export default withRouter(Header);