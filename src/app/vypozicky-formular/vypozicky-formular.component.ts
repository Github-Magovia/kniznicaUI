import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Vypozicka} from "../models/vypozicka.model";

@Component({
  selector: 'app-vypozicky-formular',
  templateUrl: './vypozicky-formular.component.html',
  styleUrls: ['./vypozicky-formular.component.css']
})
export class VypozickyFormularComponent implements OnInit {
  vypozicka: Vypozicka = {id: 0, bookId: 0, customerId: 0};

  @Output() vypozickaEmitter = new EventEmitter<Vypozicka>();
  constructor() { }

  ngOnInit(): void {
  }

  public pridajVypozicku() { this.vypozickaEmitter.emit(this.vypozicka); }
}
