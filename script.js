
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const $ = document;

class Library {
  constructor() {
    this.bookArray = JSON.parse(localStorage.getItem('bookArray')) || [];
    this.bookList = $.getElementById('booklist');
    this.authorInput = $.getElementById('author');
    this.titleInput = $.getElementById('title');
    this.addButton = $.getElementById('add');

    this.addButton.addEventListener('click', () => {
      const author = this.authorInput.value;
      const title = this.titleInput.value;
      this.addBook(author, title);
      this.authorInput.value = '';
      this.titleInput.value = '';
    });

    this.displayBooks();
  }

  updateLocalStorage() {
    localStorage.setItem('bookArray', JSON.stringify(this.bookArray));
  }

  displayBooks() {
    this.bookList.innerHTML = '';
    this.bookArray.forEach((book, index) => {
      const bookContainer = $.createElement('div');
      bookContainer.setAttribute('id', 'div');
      this.bookList.appendChild(bookContainer);
      const bookDetails = $.createElement('h3');
      bookDetails.innerHTML = `"${book.author}" by ${book.title}`;
      bookContainer.appendChild(bookDetails);
      const buttonB = $.createElement('h3');
      const removeButton = $.createElement('button');
      removeButton.innerHTML = 'Remove';

      removeButton.addEventListener('click', () => {
        buttonB.parentElement.remove();
        this.bookArray.splice(index, 1);
        this.updateLocalStorage();
        this.displayBooks();
      });

      buttonB.appendChild(removeButton);
      bookContainer.appendChild(buttonB);
    });
  }

  addBook(author, title) {
    const book = new Book(author, title);
    this.bookArray.push(book);
    this.displayBooks();
    this.updateLocalStorage();
  }
}
const library = new Library();
library.displayBooks();