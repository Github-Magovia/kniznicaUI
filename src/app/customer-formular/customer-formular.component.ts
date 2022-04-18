import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Customer} from "../models/customer.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-formular',
  templateUrl: './customer-formular.component.html',
  styleUrls: ['./customer-formular.component.css']
})
export class CustomerFormularComponent {
  // customer: Customer = {id: 0,meno: 'dadasd', contact: 'example@gmail.com'}
  customerForm: FormGroup;
  name = "Zákazníci formulár"

  @Input()
  set customer(data: Customer) {
    if (data) {
      this.naplnFormular(data);
    }
  }
  @Output()
  pridajOsobuEmitter = new EventEmitter<Customer>();
  @Output()
  upravOsobuEmitter = new EventEmitter<Customer>();

  constructor() {
    this.vytvorFormular();
  }

  private vytvorFormular(): void {
    this.customerForm = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      customerName: new FormControl(null),
      contact: new FormControl(null)
    });
  }
  private naplnFormular(cust: Customer): void {
    this.customerForm.controls['id'].setValue(cust.id);
    this.customerForm.controls['customerName'].setValue(cust.customerName);
    this.customerForm.controls['firstName'].setValue(cust.firstName);
    this.customerForm.controls['lastName'].setValue(cust.lastName);
    this.customerForm.controls['contact'].setValue(cust.contact);
  }
  public pridaj(): void {
    this.pridajOsobuEmitter.emit({
      firstName: this.customerForm.value.firstName,
      lastName: this.customerForm.value.lastName,
      customerName: this.customerForm.value.customerName,
      contact: this.customerForm.value.contact});
    this.customerForm.reset();
  }
  public uprav(): void{
    this.upravOsobuEmitter.emit(this.customerForm.value);
    this.customerForm.reset();
  }

  public odstran(): void {
    this.customer = undefined;
    this.customerForm.reset();
  }
  ngOnInit(): void{

  }

}
