export class Vypozicka {
  id?: number;
  customerId: number;
  customerName?: string;
  bookId: number;
  authorName?: string;
  title?: string;

  constructor(id: number, customerId: number, customerName: string, bookId: number, authorName: string, title: string) {
    this.id = id;
    this.customerId = customerId;
    this.customerName = customerName;
    this.bookId = bookId;
    this.authorName = authorName;
    this.title = title;
  }
}
