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
import { KnihyFormularComponent } from './knihy-formular/knihy-formular.component';
import { KnihyStrankaComponent } from './knihy-stranka/knihy-stranka.component';
import { KnihyZoznamComponent } from './knihy-zoznam/knihy-zoznam.component';
import {CustomerFormularComponent} from "./customer-formular/customer-formular.component";
import {CustomerStrankaComponent} from "./customer-stranka/customer-stranka.component";
import {CustomerZoznamComponent} from "./customer-zoznam/customer-zoznam.component";
import  {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    VypozickyStrankaComponent,
    VypozickyFormularComponent,
    VypozickyZoznamComponent,
    KnihyFormularComponent,
    KnihyStrankaComponent,
    KnihyZoznamComponent,
    CustomerFormularComponent,
    CustomerStrankaComponent,
    CustomerZoznamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
