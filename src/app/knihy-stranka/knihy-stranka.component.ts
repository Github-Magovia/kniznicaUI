import {Component, OnInit} from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {Router} from "@angular/router";
import {KnihyService} from "../../services/knihy/knihy.service";
import {waitForAsync} from "@angular/core/testing";

@Component({
  selector: 'app-knihy-stranka',
  templateUrl: './knihy-stranka.component.html',
  styleUrls: ['./knihy-stranka.component.css']
})
export class KnihyStrankaComponent implements OnInit {

  knihy: Kniha[] = [];

  knihaNaUpravu?: Kniha;

  constructor(private router: Router, private knihyService: KnihyService) { }

  ngOnInit(): void { this.refreshKnihy(); }

  refreshKnihy(): void {
    this.knihyService.getAllBooks().subscribe(data => {
      this.knihy = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridajKnihu(kniha: Kniha): void {
    this.knihyService.createBook(kniha).subscribe( data => {
      this.refreshKnihy();
    });
  }

  upravKnihu(kniha: Kniha): void {
    this.knihyService.updateBook(kniha.id, kniha).subscribe(data => {
      this.refreshKnihy();
    });
  }

  upravZoZoznamu(kniha: Kniha): void {
    this.knihaNaUpravu = kniha;
  }

  zmazZoZoznamu(kniha: Kniha): void {
    this.knihyService.deleteBook(kniha.id);
    setTimeout(() => {  this.refreshKnihy(); }, 250);
  }

}
