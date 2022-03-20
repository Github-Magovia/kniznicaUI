export class Kniha {
  id?: number;
  name: string;
  title: string;
  isbn: string;
  bookCount: number;

  constructor(id: number, name: string, title: string, isbn: string, bookCount: number) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.isbn = isbn;
    this.bookCount = bookCount;
  }
}
