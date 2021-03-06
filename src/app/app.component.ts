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

  constructor(private router: Router) {
    this.router.navigate(['/users']);
  }

  public nastavMenu(m: MENU){
    switch (m) {
      case MENU.OSOBY:
        this.router.navigate(['/users']);
        break;
      case MENU.KNIHY:
        this.router.navigate(['/knihy']);
        break;
      case MENU.VYPOZICKY:
        this.router.navigate(['/vypozicky']);
    }
  }
}
