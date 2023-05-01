const $ = document

const inputBook = $.getElementById('book')
const inputAuthor = $.getElementById('author')
const addBtn = $.getElementById('add')

let booksArray = []
function addNewBook() {
    let newBookName = inputBook.value
    let newAuthoorName= inputAuthor.value
    
    let newBookObj = {
        title: newBookName,
        author: newAuthoorName
    }
    booksArray.push(newBookName)
    booksArray.push(newAuthoorName)
    setLocalStorage(booksArray)
    bookGenerator(booksArray)
}

function setLocalStorage (bookList){
    localStorage.setItem('books', JSON.stringify(bookList))
}

function bookGenerator (bookList){
    bookList.forEach(function (book) {
        console.log(book);
    })
}

addBtn.addEventListener('click', addNewBook)
