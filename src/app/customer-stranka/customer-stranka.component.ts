import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {waitForAsync} from "@angular/core/testing";
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-customer-stranka',
  templateUrl: './customer-stranka.component.html',
  styleUrls: ['./customer-stranka.component.css']
})
export class CustomerStrankaComponent implements OnInit {

  customers: Customer[] = [];

  customerNaUpravu?: Customer;

  constructor(private router: Router, private customerService: CustomerServiceService) { }

  ngOnInit(): void { this.refreshCustomers(); }

  refreshCustomers(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(customer: Customer): void {
    this.customerService.createCustomer(customer).subscribe( data => {
      this.refreshCustomers();
    });
  }

  uprav(customer: Customer): void {
    this.customerService.updateCustomer(customer.id, customer).subscribe(data => {
      this.refreshCustomers();
    });
  }

  upravZoZoznamu(customer: Customer): void {
    this.customerNaUpravu = customer;
  }

  zmazZoZoznamu(customer: Customer): void {
    this.customerService.deleteCustomer(customer.id);
    setTimeout(() => {  this.refreshCustomers(); }, 250);
  }

}
