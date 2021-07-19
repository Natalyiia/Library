import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage/MainPage.js'
import appStore from './service/Store.js'
import Header from "./components/Header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import BookInfo from "./components/BookInfo/BookInfo";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/books/:bookId" component={BookInfo} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
