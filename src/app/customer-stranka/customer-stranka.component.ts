import {Component, OnInit, Output} from "@angular/core";
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-customer-stranka',
  templateUrl: './customer-stranka.component.html',
  styleUrls: ['./customer-stranka.component.css']
})
export class CustomerStrankaComponent implements OnInit{
  name= 'kniznicaUI - Osoby';
  @Output()customers: Customer[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  public spracujCustomera($event: Customer){
    let customer = new Customer($event.id, $event.meno, $event.contact);
    this.customers.push(customer);
  }

}
