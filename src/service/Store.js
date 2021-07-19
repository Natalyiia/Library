import {observable, action, makeObservable, configure, runInAction} from "mobx";
import Utils from "./Utils";

class Store {
    constructor() {
        makeObservable(this, {
            books: observable,
            totalResult: observable,
            paginationIndex: observable,
            filter: observable,
            getBooksFromAPI: action.bound,
            changeStore: action.bound,
            isPageLoading: observable,
        })
    }

    books = []
    totalResult = 0
    paginationIndex = 0
    filter = {
        searchString: '',
        category: 'all',
        sorting: 'relevance'
    }
    isPageLoading = true

    changeStore(CurFilter) {
        this.books = []
        this.totalResult = 0
        this.paginationIndex = 0
        this.filter = CurFilter
        this.getBooksFromAPI()

    }

    getBooksFromAPI() {
        runInAction(() => this.isPageLoading = true)
        return new Promise(resolve => {
            let bookDate = Utils.filterBook(this.filter, this.paginationIndex)
            bookDate.then(json => {
                if (json.items) {
                    runInAction(() => {
                        this.books = [...this.books, ...json.items]
                        this.totalResult = json.totalItems
                        this.paginationIndex = this.paginationIndex + json.items.length
                        this.isPageLoading = false
                    })
                }
                else{
                    runInAction(() => {this.isPageLoading = false})
                }
                resolve()
            })
        })
    }
}

const globalStore = new Store()
export default globalStore