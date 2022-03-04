import {Component, OnInit, Output} from '@angular/core';
import {Vypozicka} from "../models/vypozicka.model";

@Component({
  selector: 'app-vypozicky-stranka',
  templateUrl: './vypozicky-stranka.component.html',
  styleUrls: ['./vypozicky-stranka.component.css']
})
export class VypozickyStrankaComponent implements OnInit {
  name = 'kniznicaUI - Vypozicky';
  @Output()vypozicky: Vypozicka[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  //TODO prepojit s books / customers
  public spracujVypozicku($event: Vypozicka) {
    let vypozicka = new Vypozicka($event.id, $event.bookId, $event.customerId);
    this.vypozicky.push(vypozicka);
  }
}
