// const book = {
//   title: "Title test",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 9.38,
// };

// console.table(book);

// const objectTest = {
//   title: "title",
// };
// console.table(objectTest);

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const searchName = user.location.city
// console.table(user);
// console.log(searchName);

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//     price: 123,
//   };

//   const bookTitle = book.title;
//   console.log(bookTitle); // 'The Last Kingdom'

//   const bookGenres = book.genres;
//   console.log(bookGenres); // ['historical prose', 'adventurs']

//   const bookPrice = book.price;
//   console.log(bookPrice); // undefined

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };
// user.test = ""
// user.location.city = "jae";
// console.table(user);

// const location = user.location;
// console.table(location); // Объект location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// const propName = "name";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Сибола",
// };

// console.log(user.name); // 'Генри Сибола'

// ✅ Логически и синтаксически сгруппированные сущности

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]

// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");

// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']

// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book);
console.log(entries);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
