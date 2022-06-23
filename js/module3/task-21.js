// Дополни метод updateBook(oldName, newName) так,
// чтобы он изменял название книги с oldName на
// newName в свойстве books. Используй indexOf() для
// того, чтобы найти нужный элемент массива, и
// splice() для того чтобы заменить этот элемент

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     // Change code above this line
//   },
// };

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
    const index = this.books.indexOf(oldName);
    this.books.splice(index, 1, newName);
    // Change code above this line
  },
};

bookShelf.updateBook('Haze', 'Dungeon chronicles');
console.log(bookShelf.books);
// ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"];

bookShelf.updateBook('The last kingdom', 'Dune');
console.log(bookShelf.books);
// ["Dune", "Haze", "The guardian of dreams"]
