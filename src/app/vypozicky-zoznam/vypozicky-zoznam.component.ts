import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vypozicka} from "../models/vypozicka.model";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-vypozicky-zoznam',
  templateUrl: './vypozicky-zoznam.component.html',
  providers: [ConfirmationService, MessageService],
  styleUrls: ['./vypozicky-zoznam.component.css']
})
export class VypozickyZoznamComponent implements OnInit {
  name = "Zoznam výpôžičiek"
  @Input()
  vypozicky: Vypozicka[] = [];

  @Output()
  zmazVypozicku: EventEmitter<number> = new EventEmitter<number>();

  vybrateVypozicky: Vypozicka[] = [];

  constructor(private zmazPopup: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  zmaz(id: number): void {
    this.zmazVypozicku.emit(id);
  }

  vymazVybraneVypozicky() {
    this.zmazPopup.confirm({
      message: 'Odstranit vsetky oznacené vypozicky?',
      header: 'Mazanie',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.vybrateVypozicky.forEach(v => {
          this.zmaz(v.id);
        })
        this.vybrateVypozicky = null;
        this.messageService.add({severity:'success', summary: 'Úspešné', detail: 'Výpôžičky zmazané', life: 3000});
      }
    });
  }

}
