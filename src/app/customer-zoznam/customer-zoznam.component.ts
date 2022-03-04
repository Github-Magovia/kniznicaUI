import {Component, Input} from "@angular/core";
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-customer-zoznam',
  templateUrl: './customer-zoznam.component.html',
  styleUrls: ['./customer-zoznam.component.css']
})
export class CustomerZoznamComponent{
  @Input()customersz: Customer[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
