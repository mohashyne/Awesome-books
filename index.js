import { BookCollection } from './modules/bookCollection.js';
import { setupNavigation } from './modules/navigation.js';
import { DateTime } from './modules/luxon.js';

BookCollection.init();
setupNavigation();

// Display time in the top right corner
const currentTime = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);
const header = document.querySelector('header');
const timeElement = document.createElement('p');
timeElement.textContent = `Current time: ${currentTime}`;
header.appendChild(timeElement);














// class BookCollection {
//     static init() {
//         this.addBookForm = document.querySelector('.book-form');
//         this.bookShelf = document.querySelector('.items');
//         this.list = document.querySelector('#itemList');
//         this.bookCollection = this.loadBookCollection() || [];
//
//         this.renderBooks();
//         this.addBookForm.addEventListener('submit', this.addBookToCollection.bind(this));
//         this.bookShelf.addEventListener('click', this.handleBookRemoval.bind(this));
//     }
//
//     static loadBookCollection() {
//         const store = localStorage.getItem('bookCollection');
//         this.bookCollection = JSON.parse(store);
//         return JSON.parse(store);
//     }
//
//     static saveBookCollection() {
//         localStorage.setItem('bookCollection', JSON.stringify(this.bookCollection));
//     }
//
//     static renderBooks() {
//         this.bookShelf.innerHTML = '';
//
//         this.bookCollection.forEach((book, index) => {
//             const html = `
//         <article class="book-list">
//           <ul class="book-details">
//             <li class="title-list">
//               <span>"${book.title}"</span>
//             </li>
//             <li class="author-list">
//               <span> by ${book.author}</span>
//             </li>
//           </ul>
//           <button type="submit" class="remove" data-index="${index}">Remove</button>
//         </article>
//       `;
//
//             this.bookShelf.innerHTML += html;
//         });
//     }
//
//     static addBookToCollection(e) {
//         e.preventDefault();
//         const bookTitle = this.addBookForm.title.value.trim();
//         const bookAuthor = this.addBookForm.author.value.trim();
//
//         if (bookTitle.length && bookAuthor.length) {
//             this.bookCollection.push({ title: bookTitle, author: bookAuthor });
//             this.saveBookCollection();
//             this.renderBooks();
//             this.list.classList.remove('hidden');
//
//             this.addBookForm.reset();
//         }
//     }
//
//     static handleBookRemoval(e) {
//         if (e.target.classList.contains('remove')) {
//             const { index } = e.target.dataset;
//             this.bookCollection.splice(index, 1);
//             this.saveBookCollection();
//             this.renderBooks();
//         }
//     }
// }
//
// BookCollection.init();
//
// const navList = document.querySelector('#nav_list');
// const navAdd = document.querySelector('#nav_add');
// const navContact = document.querySelector('#nav_contact');
//
// const list = document.querySelector('#itemList');
// const form = document.querySelector('#form');
// const contact = document.querySelector('#contactsection');
// // console.log(nav_contact, nav_add, nav_list);
//
// navList.addEventListener('click', () => {
//     list.classList.remove('hidden');
//     form.classList.add('hidden');
//     contact.classList.add('hidden');
// });
//
// navAdd.addEventListener('click', () => {
//     form.classList.remove('hidden');
//     list.classList.add('hidden');
//     contact.classList.add('hidden');
// });
//
// navContact.addEventListener('click', () => {
//     contact.classList.remove('hidden');
//     form.classList.add('hidden');
//     list.classList.add('hidden');
// });