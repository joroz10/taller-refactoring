function BookManager() {
  let books = [];

  function addBook(book) {
    books.push(book);
  }

  function displayBookDetails(book) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Genre: ${book.genre}`);
    console.log(`Pages: ${book.pages}`);
  }

  function displayAllBooks() {
    console.log("All Books:");
    books.forEach((book) => {
      displayBookDetails(book);
      console.log("----------------------");
    });
  }

  function filterBooksByGenre(genre) {
    const filteredBooks = books.filter((book) => book.genre === genre);
    console.log(`Books in ${genre} genre:`);
    filteredBooks.forEach((book) => {
      displayBookDetails(book);
      console.log("----------------------");
    });
  }

  return {
    addBook,
    displayAllBooks,
    filterBooksByGenre,
  };
}

const bookManager = BookManager();

bookManager.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  genre: "Fiction",
  pages: 180,
});
bookManager.addBook({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  genre: "Fiction",
  pages: 281,
});
bookManager.addBook({
  title: "The Art of War",
  author: "Sun Tzu",
  genre: "Non-Fiction",
  pages: 50,
});

bookManager.displayAllBooks();
console.log("----------------------");
bookManager.filterBooksByGenre("Fiction");
