let $ = document

const bookArray = JSON.parse(localStorage.getItem('bookArray')) || [];

function updateLocalStorage() {
  localStorage.setItem('bookArray', JSON.stringify(bookArray));
}

function displayBooks() {
  const bookList = $.getElementById('booklist');

  bookList.innerHTML = '';
  bookArray.forEach((book, index) => {
    const div = $.createElement('div');
    div.setAttribute('id', 'div');
    bookList.appendChild(div);
    const titleB = $.createElement('h3');
    titleB.innerHTML = `${book.book}`;
    div.appendChild(titleB);
    const authorB = $.createElement('h3');
    authorB.innerHTML = `${book.author}`;
    div.appendChild(authorB);
    const buttonB = $.createElement('h3');
    const removeButton = $.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', () => {
      buttonB.parentElement.remove();
      bookArray.splice(index, 1);
      updateLocalStorage();
    });
    buttonB.appendChild(removeButton);
    div.appendChild(buttonB);
    const hr = $.createElement('hr');
    div.appendChild(hr);
  });
}
function addBook(author, book) {
  bookArray.push({ author, book });
  updateLocalStorage();
  displayBooks();
}

const authorInput = $.getElementById('author');
const bookInput = $.getElementById('book');
const addButton = $.getElementById('add');
addButton.addEventListener('click', () => {
  const author = authorInput.value;
  const book = bookInput.value;
  addBook(author, book);
  authorInput.value = '';
  bookInput.value = '';
});

updateLocalStorage();
displayBooks();