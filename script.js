const $ = document

const inputBook = $.getElementById('book')
const inputAuthor = $.getElementById('author')
const addBtn = $.getElementById('add')

let booksArray = []
function addNewBook() {
    let newBookName = inputBook.value
    
    let newBookObj = {
        title: newBookName
    }
    booksArray.push(newBookName)
    setLocalStorage(booksArray)
}

function setLocalStorage (bookList){
    localStorage.setItem('books', JSON.stringify(bookList))
}

addBtn.addEventListener('click', addNewBook)

let authorArray = []
function addNewAuthor() {
    let newAuthoorName = inputAuthor.value
    
    let newAuthorObj = {
        title: newAuthoorName
    }
    authorArray.push(newAuthoorName)
    setLocalStorage(authorArray)

    function setLocalStorage (authorList){
        localStorage.setItem('authors', JSON.stringify(authorList))
    }
    
}
addBtn.addEventListener('click', addNewAuthor)