import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-customer-zoznam',
  templateUrl: './customer-zoznam.component.html',
  styleUrls: ['./customer-zoznam.component.css']
})
export class CustomerZoznamComponent{
  @Input()
  customersz: Customer[] = [];

  constructor() { }
  @Output()
  editCustomer: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  removeCustomer: EventEmitter<number> = new EventEmitter<number>();

  edit(id: number): void{
    this.editCustomer.emit(id);
  }

  remove(id: number): void{
    this.removeCustomer.emit(id);
  }
}
