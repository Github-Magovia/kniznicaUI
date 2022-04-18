import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Customer} from "../models/customer.model";
import {CustomerServiceService} from "../../../customer-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-customer-stranka',
  templateUrl: './customer-stranka.component.html',
  styleUrls: ['./customer-stranka.component.css']
})
export class CustomerStrankaComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  private sub: Subscription = new Subscription();
  name ="Osoby";

  customerNaUpravu?: Customer;

  constructor(private router: Router, private customerService: CustomerServiceService) { }

  ngOnInit(): void { this.refreshCustomers(); }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  refreshCustomers(): void {
    this.sub.add(this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    }));
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridajCustomer(customer: Customer): void {
    this.sub.add(this.customerService.createCustomer(customer).subscribe( data => {
      this.refreshCustomers();
    }));
  }

  upravCustomer(customer: Customer): void {
    this.sub.add(this.customerService.updateCustomer(customer.id, customer).subscribe(data => {
      this.refreshCustomers();
    }));
  }

  upravZoZoznamu(id: number): void {
    this.sub.add(this.customerService.getCustomer(id).subscribe(data => {
      this.customerNaUpravu = data;
    }));
  }

  zmazZoZoznamu(id: number): void {
    this.sub.add(this.customerService.deleteCustomer(id).subscribe(data => {
      this.refreshCustomers();
    }));
  }
}
