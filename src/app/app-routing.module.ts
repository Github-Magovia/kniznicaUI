import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {VypozickyStrankaComponent} from "./vypozicky-stranka/vypozicky-stranka.component";

const routes: Routes = [
  {
    path: 'vypozicky',
    component: VypozickyStrankaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
