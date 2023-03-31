import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErwtestPage } from './erwtest.page';

const routes: Routes = [
  {
    path: '',
    component: ErwtestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErwtestPageRoutingModule {}
