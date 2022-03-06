import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "./app-routing.module";
import { VypozickyStrankaComponent } from './vypozicky-stranka/vypozicky-stranka.component';
import { VypozickyFormularComponent } from './vypozicky-formular/vypozicky-formular.component';
import { VypozickyZoznamComponent } from './vypozicky-zoznam/vypozicky-zoznam.component';
@NgModule({
  declarations: [
    AppComponent,
    VypozickyStrankaComponent,
    VypozickyFormularComponent,
    VypozickyZoznamComponent
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
