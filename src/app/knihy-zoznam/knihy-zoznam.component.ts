import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-knihy-zoznam',
  templateUrl: './knihy-zoznam.component.html',
  styleUrls: ['./knihy-zoznam.component.css']
})
export class KnihyZoznamComponent {
  @Input()
  knihy: Kniha[] = [];

  @Output()
  upravKnihu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazKnihu: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  uprav(id: number): void {
    this.upravKnihu.emit(id);
  }

  zmaz(id: number): void {
    this.zmazKnihu.emit(id);
  }


}
