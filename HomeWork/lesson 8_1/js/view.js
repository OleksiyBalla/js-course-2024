// Ensure Mustache library is included
// <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.min.js"></script>

const bookList = {
    render(books, element) {
        books.forEach((book) => {
            let item = document.createElement("div");
            item.classList.add("book");
            item.insertAdjacentHTML("beforeend", `<h2>${book.title}</h2>`);
            item.insertAdjacentHTML("beforeend", `<p>Author: ${book.author}</p>`);
            item.insertAdjacentHTML("beforeend", `<p>Year: ${book.year}</p>`);
            item.insertAdjacentHTML("beforeend", `<p>Genre: ${book.genre}</p>`);
            element.appendChild(item);
        });
    },
    renderTmpl(books, element, bookTmpl = "") {
        let html = "";
        books.forEach((book) => {
            html += Mustache.render(bookTmpl, book);
        });

        element.innerHTML = html;
    },
};
