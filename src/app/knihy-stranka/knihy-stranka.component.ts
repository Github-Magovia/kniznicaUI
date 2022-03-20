import {Component, OnInit} from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {Router} from "@angular/router";
import {KnihyService} from "../../services/knihy/knihy.service";

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
