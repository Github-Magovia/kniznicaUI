export class Customer{

  id?: number;
  customerName?: String;
  firstName: String;
  lastName: String;
  contact: String;


  constructor(customer: Customer) {
    this.id = customer.id;
    this.customerName = customer.customerName;
    this.firstName = customer.firstName;
    this.lastName = customer.lastName;
    this.contact = customer.contact;

  }
}
