const html = document.querySelector("#book-list");
const bookTmpl = document.querySelector("#bookTmpl").innerHTML;
const bookForm = document.querySelector("#bookForm");
// Inputs
const titleInp = document.querySelector("#titleInp");
const authorInp = document.querySelector("#authorInp");
const yearInp = document.querySelector("#yearInp");
const genreInp = document.querySelector("#genreInp");

let editID = null;

function render() {
    bookList.renderTmpl(booksList.books, html, bookTmpl);
}

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let book = {
        title: titleInp.value,
        author: authorInp.value,
        year: yearInp.value,
        genre: genreInp.value,
    };

    if (titleInp.value.trim() === "") {
        alert("Title cannot be empty");
        return;
    }
    if (booksList.isDuplicate(book)) {
        alert("This book is already exist in the list");
        return;
    }
    if (booksList.isRealYear(book)) {
        alert("Year: This year is not correct");
        return;
    }

    if (editID == null) {
        booksList.add(book);
    } else {
        booksList.update(editID, book);
        editID = null;
    }
    render();
});

function remove(id) {
    booksList.remove(id);
    render();
}

function update(id) {
    const book = booksList.find(id);
    editID = book.id;

    titleInp.value = book.title;
    authorInp.value = book.author;
    yearInp.value = book.year;
    genreInp.value = book.genre;

    render();
}

render();
