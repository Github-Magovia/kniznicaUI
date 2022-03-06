import {Component, Input, OnInit} from '@angular/core';
import {Vypozicka} from "../models/vypozicka.model";

@Component({
  selector: 'app-vypozicky-zoznam',
  templateUrl: './vypozicky-zoznam.component.html',
  styleUrls: ['./vypozicky-zoznam.component.css']
})
export class VypozickyZoznamComponent implements OnInit {
  @Input()vypozicky: Vypozicka[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
