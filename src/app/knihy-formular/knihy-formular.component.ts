import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-knihy-formular',
  templateUrl: './knihy-formular.component.html',
  styleUrls: ['./knihy-formular.component.css']
})
export class KnihyFormularComponent implements OnInit {

  kniha: Kniha = {id: 0, nazov: "Harry Potter", autor: "J.K Rowling", dostupnost:"ano"}

  @Output() knihaEmitter = new EventEmitter<Kniha>();

  constructor() { }

  ngOnInit(): void {
  }

  public pridajKnihu(){
    this.knihaEmitter.emit(this.kniha);
  }

}
