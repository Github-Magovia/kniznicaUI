import {Component, OnDestroy, OnInit} from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {Router} from "@angular/router";
import {KnihyService} from "../../services/knihy/knihy.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-knihy-stranka',
  templateUrl: './knihy-stranka.component.html',
  styleUrls: ['./knihy-stranka.component.css']
})
export class KnihyStrankaComponent implements OnInit, OnDestroy {
  name = 'Knihy';
  knihy: Kniha[] = [];
  private sub: Subscription = new Subscription();

  knihaNaUpravu?: Kniha;

  constructor(private router: Router, private knihyService: KnihyService) { }

  ngOnInit(): void { this.refreshKnihy(); }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  refreshKnihy(): void {
    this.sub.add(this.knihyService.getAllBooks().subscribe(data => {
      this.knihy = data;
    }));
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridajKnihu(kniha: Kniha): void {
    this.sub.add(this.knihyService.createBook(kniha).subscribe( data => {
      this.refreshKnihy();
    }));
  }

  upravKnihu(kniha: Kniha): void {
    this.sub.add(this.knihyService.updateBook(kniha.id, kniha).subscribe(data => {
      this.refreshKnihy();
    }));
  }

  upravZoZoznamu(id: number): void {
    this.sub.add(this.knihyService.getBookById(id).subscribe(data => {
      this.knihaNaUpravu = data;
    }));
  }

  zmazZoZoznamu(id: number): void {
    this.sub.add(this.knihyService.deleteBook(id).subscribe(data => {
      this.refreshKnihy();
    }));
  }

  public refreshAll(): void {
    this.refreshInput();
    this.refreshKnihy();
  }

  public refreshInput(): void {
    this.sub.add(this.knihyService.getAllBooks().subscribe(data => {
      this.knihy = data;
    }));
  }


}
