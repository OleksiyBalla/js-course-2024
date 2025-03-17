const booksList = {
    books: [
        { id: 1, title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
        { id: 2, title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
        { id: 3, title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
        { id: 4, title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
        { id: 5, title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
    ],

    lastID: 5,

    add(book) {
        this.lastID++;
        book.id = this.lastID;
        this.books.push(book);
    },

    remove(id) {
        let i = this.books.findIndex((x) => x.id == id);
        if (i !== -1) {
            this.books.splice(i, 1);
        }
    },
    update(id, book) {
        let i = this.books.findIndex((x) => x.id == id);
        this.books[i] = book;
    },
    find(id) {
        let i = this.books.findIndex((x) => x.id == id);
        if (i !== -1) {
            return this.books[i];
        }
    },
};
