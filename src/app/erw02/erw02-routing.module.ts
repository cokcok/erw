import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Erw02Page } from './erw02.page';

const routes: Routes = [
  {
    path: '',
    component: Erw02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Erw02PageRoutingModule {}
