const $ = document

const inputBook = $.getElementById('book')
const inputAuthor = $.getElementById('author')
const addBtn = $.getElementById('add')

function addNewBook() {
    let newBookName = inputBook.value
    console.log(newBookName);
}
addBtn.addEventListener('click', addNewBook)

function addNewAuthor() {
    let newAuthoorName = inputAuthor.value
    console.log(newAuthoorName);
}
addBtn.addEventListener('click', addNewAuthor)