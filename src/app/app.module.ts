import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "./app-routing.module";
import { KnihyFormularComponent } from './knihy-formular/knihy-formular.component';
import { KnihyStrankaComponent } from './knihy-stranka/knihy-stranka.component';
import { KnihyZoznamComponent } from './knihy-zoznam/knihy-zoznam.component';
@NgModule({
  declarations: [
    AppComponent,
    KnihyFormularComponent,
    KnihyStrankaComponent,
    KnihyZoznamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
