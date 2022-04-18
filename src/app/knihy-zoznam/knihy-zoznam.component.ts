import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-knihy-zoznam',
  templateUrl: './knihy-zoznam.component.html',
  providers: [ConfirmationService, MessageService],
  styleUrls: ['./knihy-zoznam.component.css']
})
export class KnihyZoznamComponent {
  name = "Zoznam kníh"
  @Input()
  knihy: Kniha[] = [];

  @Output()
  zmazKnihu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  upravKnihu: EventEmitter<number> = new EventEmitter<number>();

  vybrateKnihy: Kniha[] = [];

  constructor(private zmazPopup: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  zmaz(id: number): void {
    this.zmazKnihu.emit(id);
  }

  uprav(id: number): void {
    this.upravKnihu.emit(id);
  }

  vymazVybraneKnihy() {
    this.zmazPopup.confirm({
      message: 'Odstranit vsetky oznacené knihy?',
      header: 'Mazanie',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.vybrateKnihy.forEach(v => {
          this.zmaz(v.id);
        })
        this.vybrateKnihy = null;
        this.messageService.add({severity:'success', summary: 'Úspešné', detail: 'Knihy zmazané', life: 3000});
      }
    });
  }

}
