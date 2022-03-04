export class Customer{

  id: number;
  meno: String;
  contact: String;


  constructor(customer: Customer) {
    this.id = customer.id;
    this.meno = customer.meno;
    this.contact = customer.contact;
  }
}
