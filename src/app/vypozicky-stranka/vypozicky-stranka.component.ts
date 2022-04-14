import {Component, OnDestroy, OnInit} from '@angular/core';
import {Vypozicka} from "../models/vypozicka.model";
import {Router} from "@angular/router";
import {VypozickyService} from "../../services/vypozicky/vypozicky.service";
import {Kniha} from "../models/kniha.model";
import {Customer} from "../models/customer.model";
import {KnihyService} from "../../services/knihy/knihy.service";
import {CustomerServiceService} from "../../../customer-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-vypozicky-stranka',
  templateUrl: './vypozicky-stranka.component.html',
  styleUrls: ['./vypozicky-stranka.component.css']
})
export class VypozickyStrankaComponent implements OnInit, OnDestroy {
  name = 'Výpôžičky kníh';
  private sub: Subscription = new Subscription();

  vypozicky: Vypozicka[] = [];
  knihy: Kniha[] = [];
  customers: Customer[] = [];

  constructor(private router: Router,
              private vypozickyService: VypozickyService,
              private knihyService: KnihyService,
              private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.refreshAll();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public refreshAll(): void {
    this.refreshInput();
    this.refreshVypozicky();
  }

  pridajVypozicku(vypozicka: Vypozicka): void {
    this.sub.add(this.vypozickyService.createBorrowing(vypozicka).subscribe( data => {
      // this.refreshVypozicky();
      this.refreshAll();
    }));
  }

  zmazZoZoznamu(vypozickaId: number): void {
    this.sub.add(this.vypozickyService.deleteBorrowing(vypozickaId).subscribe(data => {
      this.refreshVypozicky();
      //this.refreshAll();
    }));
  }

  public refreshInput(): void {
    this.sub.add(this.knihyService.getAllBooks().subscribe(data => {
      this.knihy = data;
    }));
    this.sub.add(this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    }));
  }

  public refreshVypozicky(): void {
    this.sub.add(this.vypozickyService.getBorrowings().subscribe(data => {
      this.vypozicky = data;
    }));
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }
}
