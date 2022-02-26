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
  public nastavMenu(m: MENU){
    this.aktMenu = m;
  }


  public pridaj(){
    let o2 = {id: this.osoba.id, meno: this.osoba.meno, contact: this.osoba.contact}
    this.osoby.push(o2);
  }
}
