export class Customer{

  id?: String;
  customerName: String;
  email: String;


  constructor(customer: Customer) {
    this.id = customer.id;
    this.customerName = customer.customerName;
    this.email = customer.email;
  }
}

export class CustomerZoznamComponent{
  id?: String;
  meno: String;
  contact: String;


  constructor(customer: CustomerZoznamComponent) {
    this.id = customer.id;
    this.meno = customer.meno;
    this.contact = customer.contact;
  }
}
