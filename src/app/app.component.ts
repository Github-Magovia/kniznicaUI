import { Component } from '@angular/core';

enum MENU{OSOBY, KNIHY, VYPOZICKY}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kniznicaUI';
  menu = MENU;
  aktMenu = MENU.OSOBY;
  osoby:any = [];
  osoba = {id: '1', meno: 'Andrej Malý', contact: 'a.maly@gmail.com'}

  knihy: any = []

  vypozicky: any = [];
  vypozicka = {id: 0, kniha: 0, pouzivatel: 0}
  public nastavMenu(m: MENU){
    this.aktMenu = m;
  }


  public pridaj(m: MENU){
    switch (m) {
      case MENU.OSOBY:
        let o2 = {id: this.osoba.id, meno: this.osoba.meno, contact: this.osoba.contact}
        this.osoby.push(o2);
        break;
      case MENU.VYPOZICKY:
        let v = {id: this.vypozicka.id, kniha: this.vypozicka.kniha, pouzivatel: this.vypozicka.pouzivatel};
        this.vypozicky.push(v);
        break;
      case MENU.KNIHY:
        break;
    }
  }
}
