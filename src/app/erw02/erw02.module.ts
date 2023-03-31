import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Erw02PageRoutingModule } from './erw02-routing.module';

import { Erw02Page } from './erw02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Erw02PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Erw02Page]
})
export class Erw02PageModule {}
