import {Component} from "@angular/core";
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-customer-formular',
  templateUrl: './customer-formular.component.html',
  styleUrls: ['./customer-formular.component.css']
})
export class CustomerFormularComponent{
  customer: Customer = {id: 0,meno: 'dadasd', contact: 'example@gmail.com'}
  constructor() {}

}
