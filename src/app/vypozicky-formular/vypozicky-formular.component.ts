import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vypozicka} from "../models/vypozicka.model";
import {Kniha} from "../models/kniha.model";
import {Customer} from "../models/customer.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-vypozicky-formular',
  templateUrl: './vypozicky-formular.component.html',
  styleUrls: ['./vypozicky-formular.component.css']
})
export class VypozickyFormularComponent implements OnInit {
  name = "Vypôžičky formulár"
  vypozickyForm: FormGroup;
  vybranaKniha: Kniha;

  @Input()
  vypozicky: Vypozicka[];
  @Input()
  knihy: Kniha[];
  @Input()
  customers: Customer[];

  @Output()
  vypozickaEmitter = new EventEmitter<Vypozicka>();

  constructor() {
    this.vypozickyForm = new FormGroup({
      id: new FormControl(null),
      bookId: new FormControl(null, Validators.required),
      customerId: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  public pridajVypozicku() {
    this.vypozickaEmitter.emit({
      bookId: this.vypozickyForm.value.bookId,
      customerId: this.vypozickyForm.value.customerId
    });
    this.vypozickyForm.reset();
  }
}
