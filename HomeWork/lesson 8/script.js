// function book(title, author, year, genre) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.genre = genre;
// }

// const booksList = {
//     books:[

//     ],

// }
//========================================================================================================================================================

// const booksList = document.getElementById("bookList");
// const showList = document.getElementById("showList");

// showList.addEventListener("click", () => {
//     showBooksList();
// });
// const books = [
//     { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
//     { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
//     { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
//     { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
//     { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
// ];
// function showBooksList() {
//     booksList.innerHTML = ``;
//     books.forEach((book) => {
//         let bookItem = document.createElement("div");
//         bookItem.classList.add("bookList__item");
//         // bookItem.innerHTML = `<p class="bookList__item-info">Title: ${book.title} / Author:${book.author} / Year: ${book.year} / Genre: ${book.genre} </p>
//         // `;

//         bookItem.insertAdjacentHTML(
//             "afterbegin",
//             `<p class="bookList__item-info">Title: ${book.title} / Author:${book.author} / Year: ${book.year} / Genre: ${book.genre} </p>`
//         );
//         booksList.appendChild(bookItem);
//     });
// }
//========================================================================================================================================================
