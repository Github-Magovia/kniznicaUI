import { Component } from '@angular/core';
import {Router} from "@angular/router";

enum MENU{OSOBY, KNIHY, VYPOZICKY}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kniznicaUI';
  menu = MENU;
  osoby:any = [];
  osoba = {id: '1', meno: 'Andrej Malý', contact: 'a.maly@gmail.com'}

  knihy: any = []
  kniha = {id: 0, nazov: 'Harry Potter', autor: 'J.K Rowling', dostupnost: 'ano'}

  constructor(private router: Router) {
    //this.router.navigate([]); aby sa otvorila nejaka stranka pri nacitani?
  }

  public nastavMenu(m: MENU){
    switch (m) {
      case MENU.OSOBY:
        this.router.navigate([]);
        break;
      case MENU.KNIHY:
        this.router.navigate(['/knihy']);
        break;
      case MENU.VYPOZICKY:
        this.router.navigate(['/vypozicky']);
    }
  }

  public pridaj(m: MENU){
    switch (m) {
      case MENU.OSOBY:
        let o2 = {id: this.osoba.id, meno: this.osoba.meno, contact: this.osoba.contact}
        this.osoby.push(o2);
        break;
      case MENU.VYPOZICKY:
        /*let v = {id: this.vypozicka.id, kniha: this.vypozicka.kniha, pouzivatel: this.vypozicka.pouzivatel};
        this.vypozicky.push(v);*/
        break;
      case MENU.KNIHY:
        /*let k = {id: this.kniha.id, nazov: this.kniha.nazov, autor: this.kniha.autor, dostupnost: this.kniha.dostupnost};
        this.knihy.push(k);*/
        break;
    }
  }
}
