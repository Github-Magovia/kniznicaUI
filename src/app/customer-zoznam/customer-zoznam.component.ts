import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Customer} from "../models/customer.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {Vypozicka} from "../models/vypozicka.model";

@Component({
  selector: 'app-customer-zoznam',
  templateUrl: './customer-zoznam.component.html',
  providers: [ConfirmationService,MessageService],
  styleUrls: ['./customer-zoznam.component.css']
})
export class CustomerZoznamComponent{
  name ="Zoznam osôb"
  @Input()
  customersz: Customer[] = [];

  constructor(private zmazPopup: ConfirmationService,  private messageService: MessageService) { }

  vybratiZakaznici: Customer[] = [];

  @Output()
  editCustomer: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  removeCustomer: EventEmitter<number> = new EventEmitter<number>();

  edit(id: number): void{
    this.editCustomer.emit(id);
  }

  remove(id: number): void{
    this.removeCustomer.emit(id);
  }
  vymazVybranychZakaznikov(){
    this.zmazPopup.confirm({
      message: 'Odstranit vsetkych oznacených zakaznikov?',
      header: 'Mazanie',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.vybratiZakaznici.forEach(v => {
          this.remove(v.id);
        })
        this.vybratiZakaznici = null;
        this.messageService.add({severity:'success', summary: 'Úspešné', detail: 'Výpôžičky zmazané', life: 3000});
      }
    });
  }
  }

