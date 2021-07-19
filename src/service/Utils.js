async function filterBook ( filter,startIndex)  {
    console.log(filter)
    try {
        let query='q=all'
        if (filter.searchString){
            query=`q=${filter.searchString}`
        }
            if (filter.category !== 'all') {
             query+=`+subject:${filter.category}`
        }
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?${query}&startIndex=${startIndex}&maxResults=30&orderBy=${filter.sorting}&key=AIzaSyBGBaY2yexT32u_bxDDAgZ22ia7niOkH2o`)
        let json1 = await response.json();
            return json1
    }catch (e){
        console.log(e)
    }


}
export default {
    filterBook,
}