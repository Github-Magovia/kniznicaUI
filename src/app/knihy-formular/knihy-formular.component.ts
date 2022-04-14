import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-knihy-formular',
  templateUrl: './knihy-formular.component.html',
  styleUrls: ['./knihy-formular.component.css']
})
export class KnihyFormularComponent implements OnInit {
  name = "Knihy formulár";
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
      title: new FormControl(null),
      authorFirstName: new FormControl(null),
      authorLastName: new FormControl(null),
      name: new FormControl(null),
      isbn: new FormControl(null),
      bookCount: new FormControl(null)
    });
  }

  private naplnFormGroup(kniha: Kniha): void {
    this.knihaForm.controls['id'].setValue(kniha.id);
    this.knihaForm.controls['title'].setValue(kniha.title);
    this.knihaForm.controls['authorFirstName'].setValue(kniha.authorFirstName);
    this.knihaForm.controls['authorLastName'].setValue(kniha.authorLastName);
    this.knihaForm.controls['isbn'].setValue(kniha.isbn);
    this.knihaForm.controls['bookCount'].setValue(kniha.bookCount);
  }

  public pridajKnihu(): void {
    this.pridajKnihuEmitter.emit({
      title: this.knihaForm.value.title,
      authorFirstName: this.knihaForm.value.authorFirstName,
      authorLastName: this.knihaForm.value.authorLastName,
      isbn: this.knihaForm.value.isbn,
      bookCount: this.knihaForm.value.bookCount
    });
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
