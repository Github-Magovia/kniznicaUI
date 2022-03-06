import {Component, OnInit, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-knihy-stranka',
  templateUrl: './knihy-stranka.component.html',
  styleUrls: ['./knihy-stranka.component.css']
})
export class KnihyStrankaComponent implements OnInit {
  name = 'kniznicaUI - Knihy';
  @Output()knihy: Kniha[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public spracujKnihu($event: Kniha){
    let kniha = new Kniha($event.id,$event.nazov,$event.autor,$event.dostupnost);
    this.knihy.push(kniha);
  }

}
