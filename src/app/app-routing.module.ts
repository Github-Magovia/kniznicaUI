import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {VypozickyStrankaComponent} from "./vypozicky-stranka/vypozicky-stranka.component";
import {KnihyStrankaComponent} from "./knihy-stranka/knihy-stranka.component";
import {CustomerStrankaComponent} from "./customer-stranka/customer-stranka.component";

const routes: Routes = [
  {
    path: 'users',
    component: CustomerStrankaComponent
  },
  {
    path: 'vypozicky',
    component: VypozickyStrankaComponent
  },
  {
    path: 'knihy',
    component: KnihyStrankaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
