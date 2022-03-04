import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-customer-formular',
  templateUrl: './customer-formular.component.html',
  styleUrls: ['./customer-formular.component.css']
})
export class CustomerFormularComponent implements OnInit{
  customer: Customer = {id: 0,meno: 'dadasd', contact: 'example@gmail.com'}
  @Output() customerEmitter = new EventEmitter<Customer>();
  constructor() {}

  ngOnInit(): void {

  }

  public pridajCustomera() {
    this.customerEmitter.emit(this.customer);
  }

}
