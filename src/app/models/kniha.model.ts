export class Kniha {
  id?: number;
  name?: string;
  authorFirstName: string;
  authorLastName: string;
  title: string;
  isbn: string;
  bookCount: number;


  constructor(id: number, name: string, authorFirstName: string, authorLastName: string, title: string, isbn: string, bookCount: number) {
    this.id = id;
    this.name = name;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.title = title;
    this.isbn = isbn;
    this.bookCount = bookCount;
  }
}
