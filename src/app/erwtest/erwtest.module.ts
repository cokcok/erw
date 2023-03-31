import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErwtestPageRoutingModule } from './erwtest-routing.module';

import { ErwtestPage } from './erwtest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErwtestPageRoutingModule
  ],
  declarations: [ErwtestPage]
})
export class ErwtestPageModule {}
