import {Component} from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-knihy-stranka',
  templateUrl: './knihy-stranka.component.html',
  styleUrls: ['./knihy-stranka.component.css']
})
export class KnihyStrankaComponent {

  knihy: Kniha[] = [];

  knihaNaUpravu?: Kniha;

  constructor(private router: Router) { }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridajKnihu(kniha: Kniha): void {
    this.knihy.push(kniha);
  }

  upravKnihu(kniha: Kniha): void {
    const index = this.knihy.findIndex(knihaArray => knihaArray.id === kniha.id);
    if (index !== -1) {
      this.knihy[index] = kniha;
    }
  }

  upravZoZoznamu(kniha: Kniha): void {
    this.knihaNaUpravu = kniha;
  }

  zmazZoZoznamu(kniha: Kniha): void {
    const index = this.knihy.findIndex(knihaArray => knihaArray.id === kniha.id);
    if (index !== -1) {
      this.knihy.splice(index, 1);
    }
  }

}
