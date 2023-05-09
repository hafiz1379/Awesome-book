const $ = document;

const booksLink = $.querySelector('#books__link');
const bookInputsLink = $.querySelector('#bookInputs__link');
const contactLink = $.querySelector('#contact__link');
const booksSection = $.querySelector('#books');
const bookInputsSection = $.querySelector('#bookInputs');
const contactSection = $.querySelector('#contact');

const navigation = () => {
  booksLink.addEventListener('click', () => {
    booksSection.style.display = 'flex';
    bookInputsSection.style.display = 'none';
    contactSection.style.display = 'none';
  });

  bookInputsLink.addEventListener('click', () => {
    booksSection.style.display = 'none';
    bookInputsSection.style.display = 'flex';
    contactSection.style.display = 'none';
  });

  contactLink.addEventListener('click', () => {
    booksSection.style.display = 'none';
    bookInputsSection.style.display = 'none';
    contactSection.style.display = 'flex';
  });
};

export default navigation;