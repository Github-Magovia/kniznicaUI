import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-knihy-formular',
  templateUrl: './knihy-formular.component.html',
  styleUrls: ['./knihy-formular.component.css']
})
export class KnihyFormularComponent implements OnInit {
  knihaForm: FormGroup;

  @Input()
  set kniha(k: Kniha) {
    if (k) { this.naplnFormGroup(k); }
  }

  @Output() pridajKnihuEmitter = new EventEmitter<Kniha>();

  @Output() upravKnihuEmitter = new EventEmitter<Kniha>();

  constructor() {
    this.knihaForm = new FormGroup({
      id: new FormControl(null),
      nazov: new FormControl(null),
      autor: new FormControl(null),
      dostupnost: new FormControl(null)
    });
  }

  private naplnFormGroup(kniha: Kniha): void {
    this.knihaForm.controls['id'].setValue(kniha.id);
    this.knihaForm.controls['nazov'].setValue(kniha.name);
    this.knihaForm.controls['autor'].setValue(kniha.autor);
    this.knihaForm.controls['dostupnost'].setValue(kniha.dostupnost);
  }

  public pridajKnihu(): void {
    this.pridajKnihuEmitter.emit({id: Math.random().toString(),
      name: this.knihaForm.value.nazov,
      autor: this.knihaForm.value.autor,
      dostupnost: this.knihaForm.value.dostupnost});
    this.knihaForm.reset();
  }

  public upravKnihu(): void {
    this.upravKnihuEmitter.emit(this.knihaForm.value);
    this.knihaForm.reset();
  }

  public zrus(): void {
    this.kniha = undefined;
    this.knihaForm.reset();
  }

  ngOnInit(): void {
  }
}
