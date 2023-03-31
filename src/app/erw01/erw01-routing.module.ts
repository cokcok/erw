import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Erw01Page } from './erw01.page';

const routes: Routes = [
  {
    path: '',
    component: Erw01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Erw01PageRoutingModule {}
